// Landmarks are measured on the 770x908 cutout, converted to uv (v points up).
// The picture is stretched onto a plane; the vertex shader bends that plane
// (breathing, head, pointing arm, sway) and adds a depth relief so tilting the
// plane in 3D reveals real parallax. The fragment shader draws blinking and
// gaze on top of the flat texture.
const COMMON = /* glsl */ `
  const float ASP = 0.848;                    // 770 / 908
  const vec2 TS = vec2(770.0, 908.0);
  const vec2 EYE_L = vec2(0.5364, 0.7963);
  const vec2 EYE_R = vec2(0.6506, 0.7787);
  const vec2 EYE_RAD = vec2(35.0, 27.0);      // px, half width / half height of the eye opening
`

export const vertex = /* glsl */ `
  ${COMMON}
  uniform sampler2D uDepth;
  uniform float uDepthAmt, uBreath, uSway, uRoll, uShift, uForearm;
  varying vec2 vUv;
  varying float vWorldY;

  vec2 rot(vec2 p, vec2 c, float a) {
    float s = sin(a), k = cos(a);
    vec2 d = p - c;
    return c + vec2(k * d.x - s * d.y, s * d.x + k * d.y);
  }

  void main() {
    vUv = uv;
    vec2 p = vec2(uv.x * ASP, uv.y);

    // pointing arm swings around the elbow (fist and finger follow)
    float wf = smoothstep(0.58, 0.68, uv.y) * (1.0 - smoothstep(0.30, 0.42, uv.x));
    p = mix(p, rot(p, vec2(0.1558 * ASP, 0.576), uForearm), wf);

    // head rolls and shifts around the neck
    float wh = smoothstep(0.63, 0.72, uv.y) * smoothstep(0.36, 0.50, uv.x);
    p = mix(p, rot(p, vec2(0.600 * ASP, 0.612), uRoll) + vec2(uShift, 0.0), wh);

    // breathing: the torso swells around the chest, the head rides up a little
    float wt = smoothstep(0.05, 0.40, uv.y) * (1.0 - smoothstep(0.60, 0.70, uv.y));
    p += (p - vec2(0.55 * ASP, 0.38)) * uBreath * 0.011 * wt;
    p.y += uBreath * 0.0045 * smoothstep(0.40, 0.70, uv.y);

    // sway: bends from the hips, the bottom edge stays put
    p.x += uSway * pow(uv.y, 1.6);

    float d = texture2D(uDepth, uv).r;
    vec4 world = modelMatrix * vec4(p.x / ASP - 0.5, p.y - 0.5, d * uDepthAmt, 1.0);
    vWorldY = world.y;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`

export const fragment = /* glsl */ `
  ${COMMON}
  uniform sampler2D uMap;
  uniform float uBlink, uClipY, uOpacity;
  uniform vec2 uLook;
  varying vec2 vUv;
  varying float vWorldY;

  vec2 eyeSpace(vec2 uv, vec2 c) { return (uv - c) * TS / EYE_RAD; }   // -1..1 across the opening

  void main() {
    if (vWorldY < uClipY) discard;
    vec2 uv = vUv;
    vec4 col = texture2D(uMap, uv);

    // gaze: slide the iris inside each eye opening, the lids stay where they are
    vec2 shift = uLook * vec2(6.5, 4.5) / TS;
    float mL = 1.0 - smoothstep(0.55, 0.75, length(eyeSpace(uv, EYE_L)));
    float mR = 1.0 - smoothstep(0.55, 0.75, length(eyeSpace(uv, EYE_R)));
    col.rgb = mix(col.rgb, texture2D(uMap, uv - shift).rgb, max(mL, mR));

    // blink: a skin coloured lid slides down over each eye
    float edge = 1.0 - 2.0 * uBlink;                  // 1 open ... -1 closed
    float on = smoothstep(0.0, 0.05, uBlink);
    for (int i = 0; i < 2; i++) {
      vec2 c = i == 0 ? EYE_L : EYE_R;
      vec2 d = eyeSpace(uv, c);
      // slightly wider than the eye so the painted outline is covered too
      float inside = 1.0 - smoothstep(1.12, 1.45, length(d));
      // the lid edge sags at the corners: when shut it becomes a soft cartoon lash curve
      float e = edge + 0.45 * d.x * d.x * uBlink;
      float lid = inside * smoothstep(e - 0.10, e + 0.10, d.y) * on;
      // lid tone: the lit cheek under the eye blended with the nose bridge. The skin
      // right under the brow is in shadow and would make the lid look like a dark patch.
      vec3 skin = mix(texture2D(uMap, c - vec2(0.0, 48.0 / TS.y)).rgb,
                      texture2D(uMap, vec2(0.5844, 0.7852)).rgb, 0.4) * (1.0 + 0.03 * d.y);
      float line = inside * (1.0 - smoothstep(0.0, 0.13, abs(d.y - e))) * on * (1.0 - smoothstep(0.85, 1.15, abs(d.x)));
      col.rgb = mix(col.rgb, skin, lid);
      col.rgb = mix(col.rgb, skin * 0.42, line * 0.85);
    }

    gl_FragColor = vec4(col.rgb, col.a * uOpacity);
    #include <colorspace_fragment>
  }
`
