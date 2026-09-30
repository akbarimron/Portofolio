"""Membuat aset karakter (cutout RGBA + peta kedalaman) dari satu gambar.

  pip install rembg onnxruntime scipy opencv-python-headless pillow
  python tools/make-mascot.py gambar-pixar.png --crop 440 20 1210 928

Hasil: public/mascot/akbar.webp dan public/mascot/akbar-depth.png

Gambar sumber dipotong ke kotak --crop (kiri atas kanan bawah, dalam px) agar hanya
karakter yang tersisa. Titik mata, leher, dan siku di src/components/three/mascot/shader.js
diukur untuk gambar yang sekarang; jika Anda memakai gambar lain, ukur ulang titik-titik itu.
"""
import argparse
from pathlib import Path

import cv2
import numpy as np
from PIL import Image
from rembg import new_session, remove
from scipy import ndimage as ndi

ap = argparse.ArgumentParser()
ap.add_argument("image")
ap.add_argument("--crop", type=int, nargs=4, metavar=("L", "T", "R", "B"))
ap.add_argument("--out", default="public/mascot")
a = ap.parse_args()

src = Image.open(a.image).convert("RGB")
if a.crop:
    src = src.crop(tuple(a.crop))
rgb_src = np.asarray(src).astype(np.float32)
H, W = rgb_src.shape[:2]

# 1. dua model saling melengkapi: isnet menjaga jari, human_seg menjaga baju
masks = [np.asarray(remove(src, session=new_session(n), post_process_mask=True))[..., 3] / 255.0
         for n in ("isnet-general-use", "u2net_human_seg")]
alpha = np.maximum(*masks)

# 2. buang benda tipis (mis. tali) lalu simpan gumpalan terbesar
ell = lambda n: cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (n, n))
opened = cv2.morphologyEx((alpha > 0.5).astype(np.uint8), cv2.MORPH_OPEN, ell(13))
n, lab, stats, _ = cv2.connectedComponentsWithStats(opened, 8)
core = (lab == 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])).astype(np.uint8)
keep = cv2.dilate(core, ell(9)).astype(bool)

# 3. isi lubang kecil saja (jangan celah antara lengan dan pinggang)
base = keep & (alpha > 0.3)
holes = ndi.binary_fill_holes(base) & ~base
hl, hn = ndi.label(holes)
small = np.isin(hl, [i + 1 for i, ar in enumerate(ndi.sum(holes, hl, range(1, hn + 1))) if ar < 400])
hard = cv2.erode((base | small).astype(np.uint8), ell(3))
soft = np.clip((cv2.GaussianBlur(hard.astype(np.float32), (0, 0), 1.1) - 0.15) / 0.7, 0, 1)

# 4. warna tepi diteruskan ke luar agar tidak ada halo latar lama
idx = ndi.distance_transform_edt(~hard.astype(bool), return_distances=False, return_indices=True)
rgba = np.dstack([rgb_src[idx[0], idx[1]], soft * 255]).clip(0, 255).astype(np.uint8)

# 5. kedalaman: bantalan bulat dari jarak ke tepi siluet
d = 1 - (1 - np.clip(ndi.distance_transform_edt(hard) / 110.0, 0, 1)) ** 2.2
d = cv2.GaussianBlur(d.astype(np.float32), (0, 0), 7)
d /= d.max()

out = Path(a.out)
out.mkdir(parents=True, exist_ok=True)
Image.fromarray(rgba, "RGBA").save(out / "akbar.webp", "WEBP", quality=92, method=6)
Image.fromarray((d * 255).astype(np.uint8), "L").resize((W // 3, H // 3), Image.LANCZOS).save(out / "akbar-depth.png", optimize=True)
print(f"selesai: {W}x{H} -> {out}")
