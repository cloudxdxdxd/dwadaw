// ============================================================================
// FANG Collective — Vanilla JS Application (index.js)
// Edit member portrait `src` URLs and Discord `discordId` snowflakes below.
// ============================================================================

const BACKGROUND_MUSIC = {
  videoId: 'b3yUwewEY3A',
  startSeconds: 30,
  startVolume: 45,
};

const INTRO_IMAGE_URL =
  'https://media.discordapp.net/attachments/1572227440267362434/1574004907143340093/4voFY8AAAAGSURBVAMA3WrxL4FqqXkAAAAASUVORK5CYII.png?ex=6b0411cd&is=6b02c04d&hm=75bb263e15de6501fbb563b7e40fb54b885ed9e067a7c6046d008c6d04c7acd4&format=webp&quality=lossless';

const ROSTER = [
  {
    id: 'com',
    name: 'Com',
    plateCode: 'PLATE 01',
    discipline: 'visual',
    disciplineLabel: 'Harmless',
    location: 'canada',
    joinedYear: '2014',
    motif: 'mob',
    src: 'https://i.pinimg.com/736x/c2/d8/b2/c2d8b27faba71e1304faeb85d9f674ac.jpg',
    discordId: '1561715349911507046',
    statement: '764K',
    medium: 'Silver-gelatin lithograph',
    handle: '@mob.archive',
    sound: {
      trackTitle: 'Hollow Ground Study I',
      durationSec: 194,
      baseHz: 55,
      harmonicRatio: 1.5,
      lfoRate: 0.14,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.35,
      grain: 0.55,
      vignette: 0.72,
      inverted: false,
    },
  },
  {
    id: 'conv',
    name: 'conv',
    plateCode: 'PLATE 02',
    discipline: 'audio',
    disciplineLabel: 'Audio & Tape',
    location: 'amsterdam',
    joinedYear: '2021',
    motif: 'aze',
    src: 'https://i.pinimg.com/736x/df/50/8d/df508d6b9bbee8ff8a9f3f6b0ded9740.jpg',
    discordId: '1522722271028842637',
    statement: 'drain my wallet',
    medium: 'Chiaroscuro film still',
    handle: '@aze.tape',
    sound: {
      trackTitle: 'Sodium Lamp Corridor',
      durationSec: 228,
      baseHz: 61.74,
      harmonicRatio: 1.414,
      lfoRate: 0.22,
      texture: 'hiss',
    },
    defaultAdjustments: {
      contrast: 1.45,
      grain: 0.42,
      vignette: 0.65,
      inverted: false,
    },
  },
  {
    id: 'xeire',
    name: 'xeire',
    plateCode: 'PLATE 03',
    discipline: 'archival',
    disciplineLabel: 'Wet-Plate & Archival',
    location: 'Glasgow',
    joinedYear: '2022',
    motif: 'mourn',
    src: 'https://i.pinimg.com/736x/84/06/77/840677cf487631a72de21869faa8a6d4.jpg',
    discordId: '1455329615986823424',
    statement: 'harmless idiot',
    medium: 'Wet-plate collodion',
    handle: '@mourn.collodion',
    sound: {
      trackTitle: 'Glass Plate Drift',
      durationSec: 261,
      baseHz: 49,
      harmonicRatio: 1.333,
      lfoRate: 0.1,
      texture: 'metallic',
    },
    defaultAdjustments: {
      contrast: 1.25,
      grain: 0.6,
      vignette: 0.78,
      inverted: false,
    },
  },
  {
    id: 'kkace',
    name: 'kkace',
    plateCode: 'PLATE 04',
    discipline: 'visual',
    disciplineLabel: 'Double Exposure',
    location: 'Montreal',
    joinedYear: '2022',
    motif: 'jah',
    src: 'https://i.pinimg.com/736x/80/29/7b/80297b38394e1659583244d3011fab40.jpg',
    discordId: '1256819934416081039',
    statement: 'too evil for good girl ',
    medium: 'Polaroid 665 negative',
    handle: '@jah.665',
    sound: {
      trackTitle: 'Winter Branches Over Exposed',
      durationSec: 176,
      baseHz: 65.41,
      harmonicRatio: 1.2,
      lfoRate: 0.18,
      texture: 'drone',
    },
    defaultAdjustments: {
      contrast: 1.3,
      grain: 0.5,
      vignette: 0.58,
      inverted: false,
    },
  },
  {
    id: 'bull',
    name: 'bull',
    plateCode: 'PLATE 05',
    discipline: 'audio',
    disciplineLabel: 'Sub-Bass & Field',
    location: 'Detroit',
    joinedYear: '2022',
    motif: 'corbin',
    src: 'https://i.pinimg.com/1200x/fe/be/33/febe33e91a8e5085e09f9eada17a216f.jpg',
    discordId: '1301759229937455144',
    statement: 'too evil for u',
    medium: 'Low-key gelatin print',
    handle: '@corbin.sub',
    sound: {
      trackTitle: 'Basement Organ IV',
      durationSec: 304,
      baseHz: 43.65,
      harmonicRatio: 1.5,
      lfoRate: 0.08,
      texture: 'pulse',
    },
    defaultAdjustments: {
      contrast: 1.4,
      grain: 0.48,
      vignette: 0.85,
      inverted: false,
    },
  },
  {
    id: 'uzi',
    name: 'uzi',
    plateCode: 'PLATE 06',
    discipline: 'visual',
    disciplineLabel: 'Directing & Stills',
    location: 'Tokyo',
    joinedYear: '2023',
    motif: 'raizo',
    src: 'https://i.pinimg.com/736x/aa/3e/4f/aa3e4ff2ee1ecf77e175ec40dc741133.jpg',
    discordId: '1465944191371837453',
    statement: 'ill blast u with my shotgun',
    medium: '16mm pushed reversal',
    handle: '@raizo.16mm',
    sound: {
      trackTitle: 'Four Stops Pushed',
      durationSec: 212,
      baseHz: 73.42,
      harmonicRatio: 1.25,
      lfoRate: 0.25,
      texture: 'hiss',
    },
    defaultAdjustments: {
      contrast: 1.38,
      grain: 0.62,
      vignette: 0.62,
      inverted: false,
    },
  },
  {
    id: 'seth',
    name: 'seth',
    plateCode: 'PLATE 07',
    discipline: 'archival',
    disciplineLabel: 'Print & Sound',
    location: 'Antwerp',
    joinedYear: '2024',
    motif: 'quin',
    src: 'https://i.pinimg.com/736x/6c/be/53/6cbe532ee9d6f93786c65154c9695a4f.jpg',
    discordId: '1508756650469625956',
    statement: 'trendsetter',
    medium: 'Contact sheet projection',
    handle: '@quin.contact',
    sound: {
      trackTitle: 'Shutter Blind Nocturne',
      durationSec: 245,
      baseHz: 51.91,
      harmonicRatio: 1.498,
      lfoRate: 0.16,
      texture: 'metallic',
    },
    defaultAdjustments: {
      contrast: 1.42,
      grain: 0.52,
      vignette: 0.74,
      inverted: false,
    },
  },
];

const ARCHIVE_ENTRIES = [
  {
    id: 'arc-01',
    catalogNo: 'RC-001',
    title: 'Hollow Ground Study I',
    memberId: 'com',
    memberName: 'Com',
    medium: '35mm Lithograph + Drone',
    year: '2014',
    duration: '03:14',
  },
  {
    id: 'arc-02',
    catalogNo: 'RC-004',
    title: 'Sodium Lamp Corridor',
    memberId: 'conv',
    memberName: 'conv',
    medium: 'Ferric Cassette Loop',
    year: '2021',
    duration: '03:48',
  },
  {
    id: 'arc-03',
    catalogNo: 'RC-009',
    title: 'Glass Plate Drift',
    memberId: 'xeire',
    memberName: 'xeire',
    medium: 'Wet-Plate + Bowed Brass',
    year: '2022',
    duration: '04:21',
  },
  {
    id: 'arc-04',
    catalogNo: 'RC-012',
    title: 'Winter Branches Over Exposed',
    memberId: 'kkace',
    memberName: 'kkace',
    medium: 'Polaroid 665 Transfer',
    year: '2022',
    duration: '02:56',
  },
  {
    id: 'arc-05',
    catalogNo: 'RC-015',
    title: 'Basement Organ IV',
    memberId: 'bull',
    memberName: 'bull',
    medium: 'Sub-Harmonic Tape',
    year: '2022',
    duration: '05:04',
  },
  {
    id: 'arc-06',
    catalogNo: 'RC-018',
    title: 'Four Stops Pushed',
    memberId: 'uzi',
    memberName: 'uzi',
    medium: '16mm Silent Reel + Score',
    year: '2023',
    duration: '03:32',
  },
  {
    id: 'arc-07',
    catalogNo: 'RC-021',
    title: 'Shutter Blind Nocturne',
    memberId: 'seth',
    memberName: 'seth',
    medium: 'Contact Sheet + Metal Drone',
    year: '2024',
    duration: '04:05',
  },
];

const AMBIENT_LAYERS = [
  {
    id: 'subDrone',
    label: 'Sub-Harmonic Drone',
    frequencyNote: '46.25 Hz',
    description: 'Low cellar resonance tuned in fifths through a warm analog low-pass filter.',
  },
  {
    id: 'tapeHiss',
    label: 'Ferric Tape Hiss',
    frequencyNote: '2.2 kHz Band',
    description: 'Continuous oxide noise floor sampled from degraded Type I cassette stock.',
  },
  {
    id: 'rainStatic',
    label: 'Exterior Rain Static',
    frequencyNote: '950 Hz Roll-off',
    description: 'Filtered pink-brown atmospheric rainfall recorded outside the darkroom.',
  },
  {
    id: 'bowedMetal',
    label: 'Bowed Sheet Metal',
    frequencyNote: '146.8 Hz LFO',
    description: 'Slowly sweeping metallic harmonics simulating bowed studio iron.',
  },
];

const DISCORD_STATUS_META = {
  online: {
    label: 'Online',
    shortLabel: 'Online',
    dotClass: 'status-dot--online',
    textClass: 'status-text--online',
  },
  idle: {
    label: 'Idle',
    shortLabel: 'Idle',
    dotClass: 'status-dot--idle',
    textClass: 'status-text--idle',
  },
  dnd: {
    label: 'Do Not Disturb',
    shortLabel: 'DND',
    dotClass: 'status-dot--dnd',
    textClass: 'status-text--dnd',
  },
  offline: {
    label: 'Offline',
    shortLabel: 'Offline',
    dotClass: 'status-dot--offline',
    textClass: 'status-text--offline',
  },
};

const ICONS = {
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-red" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-red" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-muted" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-xs icon-red" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-md icon-emerald" aria-hidden="true"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>',
  gamepad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-md" aria-hidden="true"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>',
};

// ============================================================================
// Web Audio Synthesizer Engine
// ============================================================================

class DarkroomAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.activeTrackNodes = [];
    this.ambientNodes = new Map();
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.35;
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  setMasterVolume(vol) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        Math.max(0, Math.min(1, vol)),
        this.ctx.currentTime,
        0.08
      );
    }
  }

  playMemberTrack(sound) {
    this.stopMemberTrack();
    const ctx = this.ensureContext();
    if (!this.masterGain) return;

    const now = ctx.currentTime;
    const trackGain = ctx.createGain();
    trackGain.gain.setValueAtTime(0.0001, now);
    trackGain.gain.exponentialRampToValueAtTime(0.42, now + 0.6);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(sound.texture === 'metallic' ? 880 : 420, now);
    filter.Q.value = sound.texture === 'metallic' ? 4.2 : 1.5;

    const osc1 = ctx.createOscillator();
    osc1.type = sound.texture === 'pulse' ? 'sawtooth' : 'triangle';
    osc1.frequency.setValueAtTime(sound.baseHz, now);

    const osc2 = ctx.createOscillator();
    osc2.type = sound.texture === 'metallic' ? 'sawtooth' : 'sine';
    osc2.frequency.setValueAtTime(sound.baseHz * sound.harmonicRatio, now);
    osc2.detune.setValueAtTime(-7, now);

    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(sound.lfoRate, now);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(180, now);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    const osc1Gain = ctx.createGain();
    osc1Gain.gain.value = 0.55;
    const osc2Gain = ctx.createGain();
    osc2Gain.gain.value = 0.35;

    osc1.connect(osc1Gain);
    osc2.connect(osc2Gain);
    osc1Gain.connect(filter);
    osc2Gain.connect(filter);

    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * (sound.texture === 'hiss' ? 0.16 : 0.06);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 1400;
    noiseFilter.Q.value = 0.8;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.25;

    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(trackGain);

    filter.connect(trackGain);
    trackGain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    lfo.start(now);
    noise.start(now);

    this.activeTrackNodes = [
      osc1,
      osc2,
      lfo,
      noise,
      osc1Gain,
      osc2Gain,
      lfoGain,
      filter,
      noiseFilter,
      noiseGain,
      trackGain,
    ];
  }

  stopMemberTrack() {
    this.activeTrackNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof node.stop === 'function') {
          node.stop();
        }
        node.disconnect();
      } catch {
        // Ignore already stopped nodes
      }
    });
    this.activeTrackNodes = [];
  }

  toggleAmbientLayer(layerId, enabled) {
    if (!enabled) {
      const existing = this.ambientNodes.get(layerId);
      if (existing) {
        existing.nodes.forEach((n) => {
          try {
            if ('stop' in n && typeof n.stop === 'function') {
              n.stop();
            }
            n.disconnect();
          } catch {
            // Ignore cleanup
          }
        });
        this.ambientNodes.delete(layerId);
      }
      return;
    }

    if (this.ambientNodes.has(layerId)) return;
    const ctx = this.ensureContext();
    if (!this.masterGain) return;

    const now = ctx.currentTime;
    const layerGain = ctx.createGain();
    layerGain.gain.setValueAtTime(0.0001, now);
    layerGain.gain.exponentialRampToValueAtTime(0.24, now + 0.5);
    layerGain.connect(this.masterGain);

    const nodes = [layerGain];

    if (layerId === 'subDrone') {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = 46.25;
      const sub = ctx.createOscillator();
      sub.type = 'triangle';
      sub.frequency.value = 69.3;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 160;
      const subGain = ctx.createGain();
      subGain.gain.value = 0.28;
      osc.connect(lp);
      sub.connect(subGain);
      subGain.connect(lp);
      lp.connect(layerGain);
      osc.start(now);
      sub.start(now);
      nodes.push(osc, sub, lp, subGain);
    } else if (layerId === 'tapeHiss' || layerId === 'rainStatic') {
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (layerId === 'rainStatic') {
          lastOut = (lastOut + 0.04 * white) / 1.04;
          data[i] = lastOut * 2.4;
        } else {
          data[i] = white * 0.25;
        }
      }
      const src = ctx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      const bp = ctx.createBiquadFilter();
      bp.type = layerId === 'rainStatic' ? 'lowpass' : 'bandpass';
      bp.frequency.value = layerId === 'rainStatic' ? 950 : 2200;
      bp.Q.value = 0.7;
      src.connect(bp);
      bp.connect(layerGain);
      src.start(now);
      nodes.push(src, bp);
    } else if (layerId === 'bowedMetal') {
      const osc1 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.value = 146.83;
      const osc2 = ctx.createOscillator();
      osc2.type = 'sawtooth';
      osc2.frequency.value = 220.5;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = 520;
      bp.Q.value = 5.5;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.12;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 180;
      lfo.connect(lfoGain);
      lfoGain.connect(bp.frequency);

      const g = ctx.createGain();
      g.gain.value = 0.18;
      osc1.connect(g);
      osc2.connect(g);
      g.connect(bp);
      bp.connect(layerGain);
      osc1.start(now);
      osc2.start(now);
      lfo.start(now);
      nodes.push(osc1, osc2, bp, lfo, lfoGain, g);
    }

    this.ambientNodes.set(layerId, { nodes, gain: layerGain });
  }
}

const audioEngine = new DarkroomAudioEngine();

// ============================================================================
// Procedural Silver-Gelatin Darkroom Fallback Canvas
// ============================================================================

function createRng(seedStr) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function drawTreeBranch(ctx, x, y, angle, length, depth, rng) {
  if (depth <= 0 || length < 2) return;
  const endX = x + Math.cos(angle) * length;
  const endY = y + Math.sin(angle) * length;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(endX, endY);
  ctx.lineWidth = Math.max(0.6, depth * 0.75);
  ctx.stroke();

  if (depth <= 3) {
    const dots = 4 + Math.floor(rng() * 6);
    for (let i = 0; i < dots; i++) {
      const dx = endX + (rng() - 0.5) * 14;
      const dy = endY + (rng() - 0.5) * 14;
      ctx.fillRect(dx, dy, 1.5, 1.5);
    }
  }

  const spread = 0.35 + rng() * 0.25;
  drawTreeBranch(ctx, endX, endY, angle - spread, length * (0.68 + rng() * 0.14), depth - 1, rng);
  drawTreeBranch(ctx, endX, endY, angle + spread * 0.9, length * (0.65 + rng() * 0.16), depth - 1, rng);
  if (rng() > 0.55) {
    drawTreeBranch(ctx, endX, endY, angle + (rng() - 0.5) * 0.3, length * 0.62, depth - 2, rng);
  }
}

function drawScratches(ctx, size, count, rng) {
  ctx.save();
  for (let i = 0; i < count; i++) {
    const isHorizontal = rng() > 0.45;
    ctx.strokeStyle = rng() > 0.5 ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.45)';
    ctx.lineWidth = 0.5 + rng() * 1.1;
    ctx.beginPath();
    if (isHorizontal) {
      const y = rng() * size;
      ctx.moveTo(0, y);
      ctx.bezierCurveTo(
        size * 0.3,
        y + (rng() - 0.5) * 8,
        size * 0.7,
        y + (rng() - 0.5) * 8,
        size,
        y + (rng() - 0.5) * 6
      );
    } else {
      const x = rng() * size;
      ctx.moveTo(x, 0);
      ctx.lineTo(x + (rng() - 0.5) * 12, size);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function renderMotifBase(ctx, size, motif, seedKey) {
  const rng = createRng(`${motif}-${seedKey}`);
  const s = size;

  ctx.fillStyle = '#070707';
  ctx.fillRect(0, 0, s, s);

  if (motif === 'mob') {
    const glow = ctx.createRadialGradient(s * 0.52, s * 0.55, s * 0.04, s * 0.52, s * 0.55, s * 0.46);
    glow.addColorStop(0, '#e8e6e3');
    glow.addColorStop(0.45, '#7e7d7b');
    glow.addColorStop(0.78, '#1a1919');
    glow.addColorStop(1, '#050505');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, s, s);

    ctx.save();
    ctx.fillStyle = '#060606';
    ctx.beginPath();
    ctx.moveTo(s * 0.12, s * 0.76);
    ctx.bezierCurveTo(s * 0.14, s * 0.36, s * 0.36, s * 0.18, s * 0.58, s * 0.21);
    ctx.bezierCurveTo(s * 0.78, s * 0.24, s * 0.82, s * 0.48, s * 0.64, s * 0.56);
    ctx.bezierCurveTo(s * 0.5, s * 0.62, s * 0.43, s * 0.5, s * 0.48, s * 0.39);
    ctx.bezierCurveTo(s * 0.38, s * 0.46, s * 0.34, s * 0.65, s * 0.44, s * 0.88);
    ctx.lineTo(s * 0.08, s * 0.92);
    ctx.closePath();
    ctx.fill();

    for (let i = 0; i < 2400; i++) {
      const x = rng() * s;
      const y = rng() * s;
      const dist = Math.hypot(x - s * 0.5, y - s * 0.52);
      if (dist > s * 0.15 && rng() > 0.45) {
        ctx.fillStyle = rng() > 0.3 ? 'rgba(6,6,6,0.65)' : 'rgba(235,235,235,0.22)';
        ctx.fillRect(x, y, 1.5, 1.5);
      }
    }

    const crosses = [
      { x: 0.42, y: 0.82, h: 0.11 },
      { x: 0.57, y: 0.86, h: 0.075 },
      { x: 0.28, y: 0.87, h: 0.065 },
    ];
    ctx.fillStyle = '#050505';
    crosses.forEach((c) => {
      const cx = c.x * s;
      const cy = c.y * s;
      const ch = c.h * s;
      ctx.fillRect(cx - 2, cy - ch, 4, ch * 1.4);
      ctx.fillRect(cx - ch * 0.42, cy - ch * 0.65, ch * 0.84, 3.5);
    });
    ctx.restore();
  } else if (motif === 'aze') {
    const bg = ctx.createRadialGradient(s * 0.5, s * 0.46, s * 0.04, s * 0.5, s * 0.5, s * 0.55);
    bg.addColorStop(0, '#2a2929');
    bg.addColorStop(0.55, '#0d0c0c');
    bg.addColorStop(1, '#040404');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, s, s);

    const shirt = ctx.createLinearGradient(0, s * 0.62, 0, s);
    shirt.addColorStop(0, '#d8d8d8');
    shirt.addColorStop(0.35, '#ffffff');
    shirt.addColorStop(1, '#f0f0f0');
    ctx.fillStyle = shirt;
    ctx.beginPath();
    ctx.moveTo(0, s);
    ctx.lineTo(0, s * 0.72);
    ctx.quadraticCurveTo(s * 0.26, s * 0.59, s * 0.5, s * 0.62);
    ctx.quadraticCurveTo(s * 0.76, s * 0.59, s, s * 0.73);
    ctx.lineTo(s, s);
    ctx.closePath();
    ctx.fill();

    const face = ctx.createRadialGradient(s * 0.49, s * 0.44, s * 0.03, s * 0.5, s * 0.46, s * 0.21);
    face.addColorStop(0, '#9c9b99');
    face.addColorStop(0.55, '#434242');
    face.addColorStop(1, '#090909');
    ctx.fillStyle = face;
    ctx.beginPath();
    ctx.ellipse(s * 0.49, s * 0.43, s * 0.15, s * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#040404';
    ctx.beginPath();
    ctx.ellipse(s * 0.49, s * 0.27, s * 0.27, s * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(s * 0.26, s * 0.34);
    ctx.quadraticCurveTo(s * 0.48, s * 0.25, s * 0.7, s * 0.36);
    ctx.lineTo(s * 0.66, s * 0.48);
    ctx.quadraticCurveTo(s * 0.5, s * 0.36, s * 0.33, s * 0.49);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#060606';
    ctx.beginPath();
    ctx.ellipse(s * 0.43, s * 0.43, s * 0.032, s * 0.017, 0.1, 0, Math.PI * 2);
    ctx.ellipse(s * 0.55, s * 0.43, s * 0.032, s * 0.017, -0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#cfcfcf';
    ctx.beginPath();
    ctx.ellipse(s * 0.48, s * 0.53, s * 0.04, s * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(180, 22, 22, 0.48)';
    for (let i = 0; i < 18; i++) {
      ctx.beginPath();
      ctx.arc(s * (0.08 + rng() * 0.25), s * (0.1 + rng() * 0.22), 1 + rng() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (motif === 'mourn') {
    const plate = ctx.createRadialGradient(s * 0.5, s * 0.48, s * 0.05, s * 0.5, s * 0.5, s * 0.65);
    plate.addColorStop(0, '#5a5957');
    plate.addColorStop(0.5, '#1d1c1b');
    plate.addColorStop(1, '#080808');
    ctx.fillStyle = plate;
    ctx.fillRect(0, 0, s, s);

    const flare = ctx.createRadialGradient(s * 0.36, s * 0.08, s * 0.02, s * 0.36, s * 0.12, s * 0.24);
    flare.addColorStop(0, '#ffffff');
    flare.addColorStop(0.35, 'rgba(235,235,235,0.65)');
    flare.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = flare;
    ctx.fillRect(0, 0, s, s * 0.45);

    for (let layer = 0; layer < 4; layer++) {
      const ox = (layer - 1.5) * 6;
      const g = ctx.createRadialGradient(s * 0.5 + ox, s * 0.52, s * 0.02, s * 0.5 + ox, s * 0.52, s * 0.28);
      g.addColorStop(0, 'rgba(232,230,226,0.34)');
      g.addColorStop(0.5, 'rgba(130,128,124,0.2)');
      g.addColorStop(1, 'rgba(10,10,10,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(s * 0.5 + ox, s * 0.48, s * 0.18, s * 0.24, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(s * 0.5 + ox, s * 0.84, s * 0.3, s * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    drawScratches(ctx, s, 26, rng);
    ctx.strokeStyle = 'rgba(220,220,220,0.14)';
    ctx.lineWidth = 4;
    ctx.strokeRect(s * 0.03, s * 0.03, s * 0.94, s * 0.94);
  } else if (motif === 'jah') {
    ctx.fillStyle = '#0d0d0d';
    ctx.fillRect(0, 0, s, s);

    const sky = ctx.createRadialGradient(s * 0.5, s * 0.42, s * 0.08, s * 0.5, s * 0.48, s * 0.56);
    sky.addColorStop(0, '#ededeb');
    sky.addColorStop(0.6, '#b8b7b4');
    sky.addColorStop(0.88, '#383838');
    sky.addColorStop(1, '#101010');
    ctx.fillStyle = sky;
    ctx.fillRect(s * 0.05, s * 0.04, s * 0.9, s * 0.92);

    ctx.save();
    ctx.fillStyle = 'rgba(20, 20, 20, 0.78)';
    ctx.beginPath();
    ctx.ellipse(s * 0.5, s * 0.88, s * 0.25, s * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();
    const headGrad = ctx.createRadialGradient(s * 0.5, s * 0.47, s * 0.04, s * 0.5, s * 0.47, s * 0.22);
    headGrad.addColorStop(0, 'rgba(38,38,38,0.85)');
    headGrad.addColorStop(0.65, 'rgba(20,20,20,0.65)');
    headGrad.addColorStop(1, 'rgba(20,20,20,0)');
    ctx.fillStyle = headGrad;
    ctx.beginPath();
    ctx.ellipse(s * 0.49, s * 0.47, s * 0.16, s * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(220,220,218,0.52)';
    ctx.beginPath();
    ctx.ellipse(s * 0.48, s * 0.88, s * 0.13, s * 0.14, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#090909';
    ctx.fillStyle = '#090909';
    drawTreeBranch(ctx, s * 0.52, s * 0.62, -Math.PI / 2 - 0.18, s * 0.16, 6, rng);
    drawTreeBranch(ctx, s * 0.46, s * 0.58, -Math.PI / 2 + 0.26, s * 0.14, 6, rng);
    drawTreeBranch(ctx, s * 0.5, s * 0.52, -Math.PI / 2 + 0.04, s * 0.15, 5, rng);
    ctx.restore();

    drawScratches(ctx, s, 10, rng);
  } else if (motif === 'corbin') {
    ctx.fillStyle = '#030303';
    ctx.fillRect(0, 0, s, s);

    const face = ctx.createRadialGradient(s * 0.5, s * 0.42, s * 0.03, s * 0.5, s * 0.44, s * 0.26);
    face.addColorStop(0, '#8d8b89');
    face.addColorStop(0.45, '#41403f');
    face.addColorStop(0.8, '#0c0c0c');
    face.addColorStop(1, '#030303');
    ctx.fillStyle = face;
    ctx.beginPath();
    ctx.ellipse(s * 0.5, s * 0.44, s * 0.17, s * 0.24, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#050505';
    ctx.beginPath();
    ctx.ellipse(s * 0.43, s * 0.41, s * 0.038, s * 0.025, 0.08, 0, Math.PI * 2);
    ctx.ellipse(s * 0.56, s * 0.41, s * 0.038, s * 0.025, -0.08, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = 'rgba(180,178,175,0.45)';
    ctx.fillRect(s * 0.49, s * 0.41, s * 0.022, s * 0.08);
    ctx.fillStyle = 'rgba(5,5,5,0.75)';
    ctx.beginPath();
    ctx.ellipse(s * 0.41, s * 0.51, s * 0.035, s * 0.05, 0.2, 0, Math.PI * 2);
    ctx.ellipse(s * 0.59, s * 0.51, s * 0.035, s * 0.05, -0.2, 0, Math.PI * 2);
    ctx.fill();

    const chest = ctx.createRadialGradient(s * 0.5, s * 0.88, s * 0.02, s * 0.5, s * 0.88, s * 0.32);
    chest.addColorStop(0, '#6a6967');
    chest.addColorStop(0.55, '#252424');
    chest.addColorStop(1, '#030303');
    ctx.fillStyle = chest;
    ctx.beginPath();
    ctx.ellipse(s * 0.5, s * 0.88, s * 0.34, s * 0.16, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (motif === 'raizo') {
    const curtain = ctx.createLinearGradient(0, 0, s, s);
    curtain.addColorStop(0, '#141414');
    curtain.addColorStop(0.5, '#2b2b2b');
    curtain.addColorStop(1, '#090909');
    ctx.fillStyle = curtain;
    ctx.fillRect(0, 0, s, s);

    ctx.fillStyle = '#070707';
    ctx.beginPath();
    ctx.ellipse(s * 0.55, s * 0.42, s * 0.24, s * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(s * 0.28, s * 0.65, s * 0.55, s * 0.35);

    const handGrad1 = ctx.createLinearGradient(s * 0.2, s * 0.32, s * 0.72, s * 0.48);
    handGrad1.addColorStop(0, '#c2c0bc');
    handGrad1.addColorStop(0.6, '#e0deda');
    handGrad1.addColorStop(1, '#7a7977');
    ctx.fillStyle = handGrad1;
    ctx.save();
    ctx.translate(s * 0.45, s * 0.4);
    ctx.rotate(-0.18);
    ctx.beginPath();
    ctx.roundRect(-s * 0.22, -s * 0.08, s * 0.42, s * 0.17, s * 0.05);
    ctx.fill();
    for (let f = 0; f < 4; f++) {
      ctx.beginPath();
      ctx.roundRect(s * 0.15, -s * 0.075 + f * s * 0.041, s * 0.15, s * 0.032, s * 0.015);
      ctx.fill();
      ctx.strokeStyle = 'rgba(15,15,15,0.65)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();

    const handGrad2 = ctx.createLinearGradient(s * 0.2, s * 0.65, s * 0.7, s * 0.52);
    handGrad2.addColorStop(0, '#9a9894');
    handGrad2.addColorStop(0.55, '#dcdad6');
    handGrad2.addColorStop(1, '#878582');
    ctx.fillStyle = handGrad2;
    ctx.save();
    ctx.translate(s * 0.44, s * 0.62);
    ctx.rotate(0.24);
    ctx.beginPath();
    ctx.roundRect(-s * 0.24, -s * 0.08, s * 0.44, s * 0.18, s * 0.05);
    ctx.fill();
    for (let f = 0; f < 4; f++) {
      ctx.beginPath();
      ctx.roundRect(s * 0.14, -s * 0.075 + f * s * 0.042, s * 0.14, s * 0.032, s * 0.015);
      ctx.fill();
      ctx.strokeStyle = 'rgba(12,12,12,0.65)';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.restore();
  } else {
    ctx.fillStyle = '#060606';
    ctx.fillRect(0, 0, s, s);

    const face = ctx.createRadialGradient(s * 0.5, s * 0.36, s * 0.02, s * 0.5, s * 0.42, s * 0.26);
    face.addColorStop(0, '#d8d6d2');
    face.addColorStop(0.45, '#595856');
    face.addColorStop(1, '#080808');
    ctx.fillStyle = face;
    ctx.beginPath();
    ctx.ellipse(s * 0.5, s * 0.44, s * 0.16, s * 0.24, 0, 0, Math.PI * 2);
    ctx.fill();

    const drawSplayedHand = (cx, flip) => {
      ctx.save();
      ctx.translate(cx, s * 0.66);
      ctx.scale(flip, 1);
      const palm = ctx.createLinearGradient(-20, 0, 20, -140);
      palm.addColorStop(0, '#a6a4a0');
      palm.addColorStop(0.5, '#eae8e4');
      palm.addColorStop(1, '#c8c6c2');
      ctx.fillStyle = palm;
      ctx.beginPath();
      ctx.roundRect(-s * 0.065, -s * 0.05, s * 0.13, s * 0.24, s * 0.04);
      ctx.fill();

      const angles = [-0.26, -0.1, 0.04, 0.18];
      const lengths = [0.24, 0.29, 0.27, 0.21];
      angles.forEach((ang, idx) => {
        ctx.save();
        ctx.translate(-s * 0.045 + idx * s * 0.032, -s * 0.03);
        ctx.rotate(ang);
        ctx.beginPath();
        ctx.roundRect(-s * 0.015, -s * lengths[idx], s * 0.03, s * lengths[idx], s * 0.014);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.45)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      });
      ctx.restore();
    };

    drawSplayedHand(s * 0.36, 1);
    drawSplayedHand(s * 0.64, -1);

    ctx.fillStyle = '#080808';
    ctx.beginPath();
    ctx.ellipse(s * 0.48, s * 0.35, s * 0.025, s * 0.015, 0, 0, Math.PI * 2);
    ctx.fill();

    for (let x = 0; x < s; x += 18) {
      if (rng() > 0.4) {
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        ctx.fillRect(x, 0, 1.5, s);
      }
    }
    drawScratches(ctx, s, 14, rng);
  }
}

function applyDarkroomPass(ctx, size, adjustments, seedKey, preserveCrimsonHints) {
  const imageData = ctx.getImageData(0, 0, size, size);
  const data = imageData.data;
  const rng = createRng(`grain-${seedKey}`);
  const half = size / 2;
  const maxDist = Math.hypot(half, half);

  const contrast = adjustments.contrast;
  const grainAmount = adjustments.grain * 74;
  const vignetteStrength = adjustments.vignette;

  for (let i = 0; i < data.length; i += 4) {
    const px = (i / 4) % size;
    const py = Math.floor(i / 4 / size);

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const isCrimsonHint = preserveCrimsonHints && r > g + 35 && r > b + 35;

    let lum = 0.299 * r + 0.587 * g + 0.114 * b;
    lum = (lum - 128) * contrast + 128;
    lum += (rng() - 0.5) * grainAmount;

    if (vignetteStrength > 0) {
      const dist = Math.hypot(px - half, py - half) / maxDist;
      const falloff = Math.pow(Math.max(0, dist - 0.22) / 0.78, 1.85);
      lum *= Math.max(0, 1 - falloff * vignetteStrength * 0.92);
    }

    if (adjustments.inverted) {
      lum = 255 - lum;
    }

    const clamped = Math.max(0, Math.min(255, lum));

    if (isCrimsonHint && !adjustments.inverted) {
      data[i] = Math.min(255, clamped + 115);
      data[i + 1] = Math.max(0, clamped * 0.35);
      data[i + 2] = Math.max(0, clamped * 0.35);
    } else {
      data[i] = clamped;
      data[i + 1] = clamped;
      data[i + 2] = clamped;
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

function createDarkroomFallbackCanvas(member, size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  canvas.className = 'plate-media';
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', member.name);

  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (ctx) {
    renderMotifBase(ctx, size, member.motif, member.id);
    applyDarkroomPass(ctx, size, member.defaultAdjustments, member.id, member.motif === 'aze');
  }
  return canvas;
}

function createPortraitMedia(member, size) {
  if (member.src && member.src.trim()) {
    const img = document.createElement('img');
    img.src = member.src;
    img.alt = member.name;
    img.referrerPolicy = 'no-referrer';
    img.loading = 'eager';
    img.decoding = 'async';
    img.className = 'plate-media';
    img.addEventListener('error', () => {
      const fallback = createDarkroomFallbackCanvas(member, size);
      img.replaceWith(fallback);
    });
    return img;
  }
  return createDarkroomFallbackCanvas(member, size);
}

// ============================================================================
// Formatting & Lanyard Helpers
// ============================================================================

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatSeconds(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function formatDurationMs(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function getDiscordAvatarUrl(user) {
  if (!user.avatar) {
    const idx =
      user.discriminator && user.discriminator !== '0'
        ? Number(user.discriminator) % 5
        : Number((BigInt(user.id) >> 22n) % 6n);
    return `https://cdn.discordapp.com/embed/avatars/${idx}.png`;
  }
  const ext = user.avatar.startsWith('a_') ? 'gif' : 'png';
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=128`;
}

function getActivityAssetUrl(activity) {
  const raw = activity.assets?.large_image;
  if (!raw) return null;

  if (raw.startsWith('mp:external/')) {
    return `https://media.discordapp.net/external/${raw.slice('mp:external/'.length)}`;
  }
  if (raw.startsWith('spotify:')) {
    return `https://i.scdn.co/image/${raw.slice('spotify:'.length)}`;
  }
  if (activity.application_id) {
    return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${raw}.png`;
  }
  return null;
}

// ============================================================================
// Application State & Lanyard Live Presence
// ============================================================================

const presenceMap = new Map();
const activeAmbientLayers = new Set();
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

let selectedIndex = -1;
let activeFanIndex = -1;
let fanCycleRafId = 0;
let fanElapsedMs = 0;
let fanLastTickMs = 0;
let fanPausedByHover = false;
let isLoaderActive = false;
let isPlayingTrack = false;
let trackElapsedSec = 0;
let trackIntervalId = null;
let deckHideTimeoutId = null;
let dealEpoch = 0;
let modalNavEpoch = 0;
let activeModalFlipAnim = null;
let activeBackdropAnim = null;
const card3dFlipAnims = new WeakMap();

function startLanyard() {
  const validIds = Array.from(
    new Set(
      ROSTER.map((m) => m.discordId?.trim()).filter((id) => Boolean(id && /^\d{15,22}$/.test(id)))
    )
  );

  if (validIds.length === 0) return;

  validIds.forEach((id) => {
    presenceMap.set(id, { status: 'loading' });
  });

  // 1. Initial REST fetch
  validIds.forEach((id) => {
    fetch(`https://api.lanyard.rest/v1/users/${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json && json.success && json.data) {
          presenceMap.set(id, { status: 'ready', data: json.data });
        } else {
          presenceMap.set(id, {
            status: 'error',
            error:
              json?.error?.message ||
              'User is not monitored by Lanyard yet. Join discord.gg/lanyard.',
          });
        }
        syncPresenceUI(id);
      })
      .catch(() => {
        presenceMap.set(id, {
          status: 'error',
          error: 'Unable to reach Lanyard API.',
        });
        syncPresenceUI(id);
      });
  });

  // 2. Real-time WebSocket stream
  let ws = null;
  let heartbeatTimer = null;

  const connect = () => {
    try {
      ws = new WebSocket('wss://api.lanyard.rest/socket');
    } catch {
      return;
    }

    ws.onmessage = (event) => {
      let msg;
      try {
        msg = JSON.parse(String(event.data));
      } catch {
        return;
      }

      if (msg.op === 1 && msg.d && typeof msg.d === 'object') {
        const interval = msg.d.heartbeat_interval || 30000;
        if (heartbeatTimer !== null) window.clearInterval(heartbeatTimer);
        heartbeatTimer = window.setInterval(() => {
          if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ op: 3 }));
          }
        }, interval);

        if (ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              op: 2,
              d: { subscribe_to_ids: validIds },
            })
          );
        }
      }

      if (msg.op === 0 && msg.d && typeof msg.d === 'object') {
        if (msg.t === 'INIT_STATE') {
          Object.entries(msg.d).forEach(([userId, data]) => {
            if (data && data.discord_user) {
              presenceMap.set(userId, { status: 'ready', data });
              syncPresenceUI(userId);
            }
          });
        } else if (msg.t === 'PRESENCE_UPDATE') {
          const userId = msg.d?.discord_user?.id;
          if (userId) {
            presenceMap.set(userId, { status: 'ready', data: msg.d });
            syncPresenceUI(userId);
          }
        }
      }
    };

    ws.onclose = () => {
      if (heartbeatTimer !== null) {
        window.clearInterval(heartbeatTimer);
        heartbeatTimer = null;
      }
      window.setTimeout(connect, 4000);
    };
  };

  connect();

  // Keep Spotify progress & activity elapsed timers ticking every second when modal is open
  window.setInterval(() => {
    if (selectedIndex < 0) return;
    const member = ROSTER[selectedIndex];
    const p = member?.discordId ? presenceMap.get(member.discordId.trim()) : null;
    if (
      p?.status === 'ready' &&
      p.data &&
      (p.data.listening_to_spotify || p.data.activities?.some((a) => a.timestamps?.start))
    ) {
      renderModalPresence(member);
    }
  }, 1000);
}

function updateCardPresence(member) {
  const container = document.querySelector(`[data-card-presence="${member.id}"]`);
  if (!container) return;

  const trimmedId = member.discordId?.trim();
  const state = trimmedId ? presenceMap.get(trimmedId) : null;
  if (!state || state.status !== 'ready' || !state.data) {
    container.innerHTML = '';
    container.classList.add('is-hidden');
    return;
  }

  const data = state.data;
  const meta = DISCORD_STATUS_META[data.discord_status] || DISCORD_STATUS_META.offline;
  const activityLine =
    data.listening_to_spotify && data.spotify
      ? `Spotify · ${data.spotify.song}`
      : data.activities?.find((a) => a.type !== 4)?.name ||
        data.activities?.find((a) => a.type === 4)?.state ||
        '';

  container.classList.remove('is-hidden');
  container.innerHTML = `
    <span class="card-status-row">
      <span aria-hidden="true" class="status-dot ${meta.dotClass}"></span>
      <span class="${meta.textClass}">${meta.shortLabel}</span>
    </span>
    ${
      activityLine
        ? `<span class="card-activity">${escapeHtml(activityLine)}</span>`
        : ''
    }
  `;
}

function syncPresenceUI(discordId) {
  ROSTER.forEach((member) => {
    if (member.discordId?.trim() === discordId) {
      updateCardPresence(member);
    }
  });
  if (selectedIndex >= 0) {
    const activeMember = ROSTER[selectedIndex];
    if (activeMember?.discordId?.trim() === discordId) {
      renderModalPresence(activeMember);
    }
  }
}

// ============================================================================
// Roster Rendering, Fanned Card Picker & Central Dealer Deck Distribution
// ============================================================================

const FAN_SWITCH_INTERVAL_MS = 3200;

function updateFanTimerBar() {
  const fill = document.getElementById('fan-timer-fill');
  if (!fill) return;
  const ratio =
    activeFanIndex < 0 ? 0 : Math.max(0, Math.min(1, fanElapsedMs / FAN_SWITCH_INTERVAL_MS));
  fill.style.transform = `scaleX(${ratio})`;
}

function renderFanPips() {
  const pipsHost = document.getElementById('fan-pips');
  if (!pipsHost) return;
  pipsHost.innerHTML = '';

  ROSTER.forEach((member, index) => {
    const pip = document.createElement('button');
    pip.type = 'button';
    pip.className = 'fan-pip';
    pip.dataset.index = String(index);
    pip.setAttribute('role', 'tab');
    pip.setAttribute('aria-label', `Pick ${member.name} (${member.plateCode})`);
    pip.setAttribute('aria-selected', String(index === activeFanIndex));
    pip.addEventListener('click', () => {
      setPickedFanCard(index);
      fanElapsedMs = 0;
      fanLastTickMs = performance.now();
      updateFanTimerBar();
    });
    pipsHost.appendChild(pip);
  });
}

function syncFanReadout(index) {
  const counterEl = document.getElementById('fan-counter');
  const nameEl = document.getElementById('fan-active-name');
  const displayIdx = index >= 0 && index < ROSTER.length ? index : 0;
  const member = ROSTER[displayIdx];

  if (counterEl) {
    counterEl.textContent = `${String(displayIdx + 1).padStart(2, '0')} / ${String(ROSTER.length).padStart(2, '0')}`;
  }
  if (nameEl && member) {
    const changed = nameEl.textContent !== member.name;
    nameEl.textContent = member.name;
    if (changed && activeFanIndex >= 0 && !reducedMotionQuery.matches) {
      nameEl.animate(
        [
          { opacity: 0.25, transform: 'translateY(4px)' },
          { opacity: 1, transform: 'translateY(0px)' },
        ],
        { duration: 280, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    }
  }

  const pips = document.querySelectorAll('#fan-pips .fan-pip');
  pips.forEach((pip) => {
    const isActive = Number(pip.dataset.index) === displayIdx && activeFanIndex >= 0;
    pip.classList.toggle('is-active', isActive);
    pip.setAttribute('aria-selected', String(isActive));
  });
}

function resetCardTilt(card3d, innerShell) {
  if (card3d) {
    card3d.style.setProperty('--tilt-x', '0deg');
    card3d.style.setProperty('--tilt-y', '0deg');
  }
  if (innerShell) {
    innerShell.style.setProperty('--glare-x', '50%');
    innerShell.style.setProperty('--glare-y', '35%');
  }
}

const BACK_WING_OFFSETS = [-2.6, -1.75, -0.95, 0.95, 1.75, 2.6];

function getWingOffsets(count) {
  if (count === BACK_WING_OFFSETS.length) return BACK_WING_OFFSETS;
  const result = [];
  const half = count / 2;
  for (let i = 0; i < count; i += 1) {
    const pos = i < half ? i - half - 0.35 : i - half + 0.35;
    result.push(pos);
  }
  return result;
}

const returningSlotTimers = new WeakMap();

function markSlotReturning(slot) {
  if (!slot) return;
  const prevTimer = returningSlotTimers.get(slot);
  if (prevTimer) {
    window.clearTimeout(prevTimer);
  }
  slot.classList.add('is-returning');
  const timerId = window.setTimeout(() => {
    slot.classList.remove('is-returning');
    returningSlotTimers.delete(slot);
  }, 680);
  returningSlotTimers.set(slot, timerId);
}

function triggerCardSettleAnimation(slot, dir) {
  if (!slot || reducedMotionQuery.matches || !slot.classList.contains('is-landed')) return;
  const card3d = slot.querySelector('.card-3d');
  if (!card3d) return;

  const prevAnim = card3dFlipAnims.get(card3d);
  if (prevAnim) {
    prevAnim.cancel();
  }

  const sign = dir >= 0 ? 1 : -1;
  const anim = card3d.animate(
    [
      {
        offset: 0,
        transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg) scale(1)',
      },
      {
        offset: 0.42,
        transform: `translate3d(0px, 6px, -24px) rotateY(${sign * -18}deg) rotateX(-4deg) scale(0.97)`,
      },
      {
        offset: 1,
        transform: 'translate3d(0px, 0px, 0px) rotateY(0deg) rotateX(0deg) scale(1)',
      },
    ],
    {
      duration: 620,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'none',
    }
  );

  card3dFlipAnims.set(card3d, anim);
  anim.onfinish = () => {
    if (card3dFlipAnims.get(card3d) === anim) {
      card3dFlipAnims.delete(card3d);
    }
  };
}

function triggerCardFlipAnimation(slot, dir, wasHovered = false) {
  if (!slot || reducedMotionQuery.matches || !slot.classList.contains('is-landed')) return;
  const card3d = slot.querySelector('.card-3d');
  const innerShell = slot.querySelector('.card-inner-shell');
  if (!card3d) return;

  resetCardTilt(card3d, innerShell);

  const prevAnim = card3dFlipAnims.get(card3d);
  if (prevAnim) {
    prevAnim.cancel();
  }

  const startY = wasHovered ? -14 : 0;
  const startScale = wasHovered ? 1.03 : 1;
  const sign = dir >= 0 ? 1 : -1;
  const anim = card3d.animate(
    [
      {
        offset: 0,
        transform: `translate3d(0px, ${startY}px, 0px) rotateY(0deg) rotateX(0deg) scale(${startScale})`,
      },
      {
        offset: 0.28,
        transform: `translate3d(0px, -30px, 54px) rotateY(${sign * 105}deg) rotateX(7deg) scale(1.06)`,
      },
      {
        offset: 0.54,
        transform: `translate3d(0px, -24px, 48px) rotateY(${sign * 195}deg) rotateX(4deg) scale(1.05)`,
      },
      {
        offset: 0.82,
        transform: `translate3d(0px, -4px, 8px) rotateY(${sign * 352}deg) rotateX(-1.5deg) scale(1.012)`,
      },
      {
        offset: 1,
        transform: `translate3d(0px, 0px, 0px) rotateY(${sign * 360}deg) rotateX(0deg) scale(1)`,
      },
    ],
    {
      duration: 680,
      easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      fill: 'none',
    }
  );

  card3dFlipAnims.set(card3d, anim);
  anim.onfinish = () => {
    if (card3dFlipAnims.get(card3d) === anim) {
      card3dFlipAnims.delete(card3d);
    }
  };
}

function setPickedFanCard(index, explicitDir = 0) {
  if (ROSTER.length === 0) return;
  const prevIndex = activeFanIndex;
  const normalized = ((index % ROSTER.length) + ROSTER.length) % ROSTER.length;
  activeFanIndex = normalized;

  const slots = Array.from(document.querySelectorAll('#roster-grid .card-slot'));
  const unpickedSlots = slots.filter((slot) => Number(slot.dataset.index) !== normalized);
  const wingOffsets = getWingOffsets(unpickedSlots.length);

  let pickedSlot = null;
  let prevSlot = null;
  const targetSlot = slots.find((slot) => Number(slot.dataset.index) === normalized);
  const targetWasHovered = Boolean(targetSlot && targetSlot.matches(':hover'));

  slots.forEach((slot) => {
    const slotIdx = Number(slot.dataset.index);
    const isPicked = slotIdx === normalized;
    if (slotIdx === prevIndex && prevIndex !== normalized) {
      prevSlot = slot;
    }
    if (isPicked) {
      const prevTimer = returningSlotTimers.get(slot);
      if (prevTimer) {
        window.clearTimeout(prevTimer);
        returningSlotTimers.delete(slot);
      }
      slot.classList.remove('is-returning');
      pickedSlot = slot;
      slot.classList.add('is-picked');
      slot.style.setProperty('--fan-offset', '0');
      slot.style.setProperty('--fan-arch-y', '0px');
      slot.style.setProperty('--fan-rot', '0deg');
      slot.style.setProperty('--fan-z', '65');
    } else {
      slot.classList.remove('is-picked');
      resetCardTilt(slot.querySelector('.card-3d'), slot.querySelector('.card-inner-shell'));
    }
  });

  unpickedSlots.forEach((slot, wingIdx) => {
    const offset = wingOffsets[wingIdx] ?? 0;
    const fanRot = offset * 8.5;
    const archY = Math.round(Math.pow(Math.abs(offset), 1.75) * 9.5);
    const fanZ = Math.max(10, Math.round(20 - Math.abs(offset) * 3));
    slot.dataset.fanRotDeg = String(fanRot);
    slot.style.setProperty('--fan-offset', String(offset));
    slot.style.setProperty('--fan-arch-y', `${archY}px`);
    slot.style.setProperty('--fan-rot', `${fanRot}deg`);
    slot.style.setProperty('--fan-z', String(fanZ));
  });

  if (pickedSlot && prevIndex >= 0 && prevIndex !== normalized) {
    const flipDir = explicitDir !== 0 ? explicitDir : normalized > prevIndex ? -1 : 1;
    if (prevSlot) {
      markSlotReturning(prevSlot);
      triggerCardSettleAnimation(prevSlot, flipDir);
    }
    triggerCardFlipAnimation(pickedSlot, flipDir, targetWasHovered);
  }

  syncFanReadout(normalized);
}

function stopFanAutoCycle() {
  if (fanCycleRafId !== 0) {
    window.cancelAnimationFrame(fanCycleRafId);
    fanCycleRafId = 0;
  }
  fanElapsedMs = 0;
  updateFanTimerBar();
}

function tickFanCycle(now) {
  if (fanCycleRafId === 0) return;

  const dt = Math.min(100, Math.max(0, now - fanLastTickMs));
  fanLastTickMs = now;

  const canAdvance =
    !fanPausedByHover &&
    selectedIndex < 0 &&
    !isLoaderActive &&
    activeFanIndex >= 0 &&
    document.visibilityState === 'visible';

  if (canAdvance) {
    fanElapsedMs += dt;
    if (fanElapsedMs >= FAN_SWITCH_INTERVAL_MS) {
      fanElapsedMs = 0;
      setPickedFanCard((activeFanIndex + 1) % ROSTER.length, 1);
    }
    updateFanTimerBar();
  }

  fanCycleRafId = window.requestAnimationFrame(tickFanCycle);
}

function startFanAutoCycle() {
  if (ROSTER.length <= 1) return;
  fanElapsedMs = 0;
  fanLastTickMs = performance.now();
  updateFanTimerBar();
  if (fanCycleRafId === 0) {
    fanCycleRafId = window.requestAnimationFrame(tickFanCycle);
  }
}

function stepPickedFanCard(delta) {
  if (ROSTER.length === 0) return;
  const base = activeFanIndex >= 0 ? activeFanIndex : 0;
  setPickedFanCard(base + delta, delta >= 0 ? 1 : -1);
  fanElapsedMs = 0;
  fanLastTickMs = performance.now();
  updateFanTimerBar();
}

function renderRosterGrid() {
  const grid = document.getElementById('roster-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const mid = (ROSTER.length - 1) / 2;

  ROSTER.forEach((member, index) => {
    const offset = index - mid;
    const fanRot = offset * 6.5;
    const archY = Math.round(Math.pow(Math.abs(offset), 1.75) * 9);
    const fanZ = 20 - Math.abs(offset);

    const slot = document.createElement('div');
    slot.className = 'card-slot';
    slot.dataset.index = String(index);
    slot.dataset.fanRotDeg = String(fanRot);
    slot.style.setProperty('--fan-offset', String(offset));
    slot.style.setProperty('--fan-arch-y', `${archY}px`);
    slot.style.setProperty('--fan-rot', `${fanRot}deg`);
    slot.style.setProperty('--fan-z', String(fanZ));

    const card3d = document.createElement('div');
    card3d.className = 'card-3d';

    // Card Back
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.setAttribute('aria-hidden', 'true');
    cardBack.innerHTML = `
      <div class="card-back-inner">
        <div class="card-back-corners"><span>♦</span><span>♦</span></div>
        <span class="card-back-title">FANG</span>
        <div class="card-back-corners"><span>♦</span><span>♦</span></div>
      </div>
    `;

    // Card Front Button (Rigid Toploader Sleeve + Inner Card Shell)
    const frontBtn = document.createElement('button');
    frontBtn.type = 'button';
    frontBtn.className = 'card-front-btn';
    frontBtn.setAttribute('aria-label', `Inspect ${member.name} (${member.disciplineLabel})`);

    const innerShell = document.createElement('div');
    innerShell.className = 'card-inner-shell';

    // Pause auto-switch when hovering/aiming, never auto-switch on mere crosshair contact
    frontBtn.addEventListener('pointerenter', () => {
      fanPausedByHover = true;
    });

    frontBtn.addEventListener('pointermove', (e) => {
      if (
        activeFanIndex !== index ||
        !slot.classList.contains('is-landed') ||
        reducedMotionQuery.matches
      ) {
        return;
      }
      const rect = frontBtn.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;
      const nx = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
      const ny = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));
      card3d.style.setProperty('--tilt-y', `${(nx * 14).toFixed(2)}deg`);
      card3d.style.setProperty('--tilt-x', `${(-ny * 12).toFixed(2)}deg`);
      innerShell.style.setProperty('--glare-x', `${((nx + 0.5) * 100).toFixed(1)}%`);
      innerShell.style.setProperty('--glare-y', `${((ny + 0.5) * 100).toFixed(1)}%`);
    });

    frontBtn.addEventListener('pointerleave', (e) => {
      resetCardTilt(card3d, innerShell);
      const nextTarget = e.relatedTarget;
      const stillOnCard =
        nextTarget instanceof Element && Boolean(nextTarget.closest('#roster-grid .card-front-btn'));
      if (!stillOnCard) {
        fanPausedByHover = false;
        fanLastTickMs = performance.now();
      }
    });

    frontBtn.addEventListener('click', () => {
      if (!slot.classList.contains('is-landed')) return;
      if (activeFanIndex !== index) {
        setPickedFanCard(index);
        fanElapsedMs = 0;
        fanLastTickMs = performance.now();
        updateFanTimerBar();
        return;
      }
      openMemberModal(index);
    });

    const topTag = document.createElement('div');
    topTag.className = 'card-top-tag tabular-nums';
    topTag.innerHTML = `
      <span>${escapeHtml(member.plateCode)}</span>
      <span class="card-top-diamond" aria-hidden="true">♦</span>
    `;

    const imgFrame = document.createElement('div');
    imgFrame.className = 'card-image-frame';
    imgFrame.appendChild(createPortraitMedia(member, 420));

    const gleam = document.createElement('div');
    gleam.className = 'card-gleam';
    gleam.setAttribute('aria-hidden', 'true');
    imgFrame.appendChild(gleam);

    const caption = document.createElement('div');
    caption.className = 'card-caption';
    caption.innerHTML = `
      <span class="card-name">${escapeHtml(member.name)}</span>
      <div class="card-presence is-hidden" data-card-presence="${escapeHtml(member.id)}"></div>
    `;

    const sleeveGlare = document.createElement('div');
    sleeveGlare.className = 'card-sleeve-glare';
    sleeveGlare.setAttribute('aria-hidden', 'true');

    innerShell.appendChild(topTag);
    innerShell.appendChild(imgFrame);
    innerShell.appendChild(caption);
    innerShell.appendChild(sleeveGlare);

    frontBtn.appendChild(innerShell);

    card3d.appendChild(cardBack);
    card3d.appendChild(frontBtn);
    slot.appendChild(card3d);
    grid.appendChild(slot);

    updateCardPresence(member);
  });

  if (!grid.dataset.fanHoverBound) {
    grid.dataset.fanHoverBound = 'true';
    grid.addEventListener('pointerleave', () => {
      fanPausedByHover = false;
      fanLastTickMs = performance.now();
    });
  }

  renderFanPips();
  syncFanReadout(0);
}

function hideDealerDeck() {
  const deck = document.getElementById('dealer-deck');
  if (!deck) return;
  deck.classList.add('is-exiting');
  window.setTimeout(() => {
    deck.classList.add('is-hidden');
  }, 280);
}

function triggerDealAnimation() {
  dealEpoch += 1;
  const currentEpoch = dealEpoch;

  stopFanAutoCycle();
  activeFanIndex = -1;
  fanPausedByHover = false;

  if (deckHideTimeoutId !== null) {
    window.clearTimeout(deckHideTimeoutId);
    deckHideTimeoutId = null;
  }

  renderRosterGrid();

  const deck = document.getElementById('dealer-deck');
  const slots = Array.from(document.querySelectorAll('#roster-grid .card-slot'));

  const activateInitialPick = () => {
    if (currentEpoch !== dealEpoch) return;
    if (activeFanIndex < 0) {
      setPickedFanCard(0);
      startFanAutoCycle();
    }
  };

  if (reducedMotionQuery.matches) {
    if (deck) deck.classList.add('is-hidden');
    slots.forEach((slot) => slot.classList.add('is-landed'));
    activateInitialPick();
    return;
  }

  if (deck) {
    deck.classList.remove('is-hidden', 'is-exiting');
  }

  const deckRect = deck?.getBoundingClientRect();

  slots.forEach((slot, index) => {
    const card3d = slot.querySelector('.card-3d');
    if (!card3d) return;

    const slotRect = slot.getBoundingClientRect();
    let dx = 0;
    let dy = -220;
    if (deckRect && deckRect.width > 0) {
      const slotCenterX = slotRect.left + slotRect.width / 2;
      const slotCenterY = slotRect.top + slotRect.height / 2;
      const deckCenterX = deckRect.left + deckRect.width / 2;
      const deckCenterY = deckRect.top + deckRect.height / 2;
      dx = deckCenterX - slotCenterX;
      dy = deckCenterY - slotCenterY;
    }

    const fanRot = Number(slot.dataset.fanRotDeg || '0');
    const angleRad = (-fanRot * Math.PI) / 180;
    const cosA = Math.cos(angleRad);
    const sinA = Math.sin(angleRad);
    const localDx = (dx * cosA - dy * sinA) / 0.88;
    const localDy = (dx * sinA + dy * cosA) / 0.88;
    const rot = Math.max(-18, Math.min(18, -dx * 0.035)) - fanRot;

    const anim = card3d.animate(
      [
        {
          offset: 0,
          opacity: 0,
          transform: `translate3d(${localDx}px, ${localDy}px, 0) scale(0.48) rotateY(180deg) rotateZ(${rot}deg)`,
        },
        {
          offset: 0.18,
          opacity: 1,
          transform: `translate3d(${localDx * 0.68}px, ${localDy * 0.55 - 18}px, 0) scale(0.78) rotateY(175deg) rotateZ(${rot * 0.55}deg)`,
        },
        {
          offset: 0.68,
          opacity: 1,
          transform: `translate3d(${localDx * 0.06}px, ${localDy * 0.05}px, 0) scale(0.96) rotateY(95deg) rotateZ(${rot * 0.12}deg)`,
        },
        {
          offset: 1,
          opacity: 1,
          transform: 'translate3d(0px, 0px, 0) scale(1) rotateY(0deg) rotateZ(0deg)',
        },
      ],
      {
        delay: index * 150,
        duration: 640,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'both',
      }
    );

    anim.onfinish = () => {
      if (currentEpoch !== dealEpoch) return;
      slot.classList.add('is-landed');
      if (index === slots.length - 1) {
        window.setTimeout(() => {
          if (currentEpoch !== dealEpoch) return;
          hideDealerDeck();
          activateInitialPick();
        }, 160);
      }
    };
  });

  // Safety timeout in case animation events are skipped in background tabs
  deckHideTimeoutId = window.setTimeout(() => {
    if (currentEpoch !== dealEpoch) return;
    slots.forEach((slot) => slot.classList.add('is-landed'));
    hideDealerDeck();
    activateInitialPick();
  }, ROSTER.length * 150 + 920);
}

// ============================================================================
// Loading Screen Controller
// ============================================================================

let activeLoaderCleanup = null;

function runLoadingScreen() {
  if (activeLoaderCleanup) {
    activeLoaderCleanup();
    activeLoaderCleanup = null;
  }

  const screen = document.getElementById('loading-screen');
  const introWrap = document.getElementById('intro-image-wrap');
  const bar = document.getElementById('loader-bar');
  const percentEl = document.getElementById('loader-percent');
  const skipBtn = document.getElementById('loader-skip');
  const deck = document.getElementById('dealer-deck');

  if (!screen || !bar || !percentEl) {
    isLoaderActive = false;
    triggerDealAnimation();
    return;
  }

  isLoaderActive = true;
  stopFanAutoCycle();

  if (introWrap) {
    introWrap.innerHTML = `
      <div class="intro-image-frame">
        <img
          src="${escapeHtml(INTRO_IMAGE_URL)}"
          alt="FANG intro"
          referrerpolicy="no-referrer"
          class="intro-image"
        />
      </div>
    `;
  }

  if (deck && !reducedMotionQuery.matches) {
    deck.classList.remove('is-hidden', 'is-exiting');
  }

  screen.classList.remove('is-hidden', 'is-fading');
  bar.style.transform = 'scaleX(0)';
  percentEl.textContent = '0%';

  const urls = [
    INTRO_IMAGE_URL,
    ...ROSTER.map((m) => m.src).filter((u) => Boolean(u && u.trim())),
  ];
  let imagesLoaded = 0;
  const totalImages = urls.length;

  urls.forEach((url) => {
    const img = new Image();
    img.referrerPolicy = 'no-referrer';
    const done = () => {
      imagesLoaded += 1;
    };
    img.onload = done;
    img.onerror = done;
    img.src = url;
  });

  let finished = false;
  let rafId = 0;

  const finish = () => {
    if (finished) return;
    finished = true;
    isLoaderActive = false;
    window.cancelAnimationFrame(rafId);
    window.removeEventListener('keydown', onLoaderKey);
    skipBtn?.removeEventListener('click', onSkip);

    bar.style.transform = 'scaleX(1)';
    percentEl.textContent = '100%';
    screen.classList.add('is-fading');

    window.setTimeout(() => {
      screen.classList.add('is-hidden');
      if (introWrap) {
        introWrap.innerHTML = '';
      }
      triggerDealAnimation();
    }, 450);
  };

  const onSkip = () => {
    unlockAndPlayMusic();
    finish();
  };
  const onLoaderKey = (e) => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
      unlockAndPlayMusic();
      finish();
    }
  };

  skipBtn?.addEventListener('click', onSkip);
  window.addEventListener('keydown', onLoaderKey);

  const startTime = performance.now();
  const durationMs = 2400;

  const tick = (now) => {
    if (finished) return;
    const elapsed = now - startTime;
    const timeRatio = Math.min(1, elapsed / durationMs);
    const imageRatio = totalImages === 0 ? 1 : imagesLoaded / totalImages;
    const easedTime = 1 - Math.pow(1 - timeRatio, 2.2);
    const targetRatio =
      elapsed >= 3200 ? 1 : Math.min(easedTime, 0.78 + imageRatio * 0.22);

    const pct = Math.min(100, Math.round(targetRatio * 100));
    bar.style.transform = `scaleX(${pct / 100})`;
    percentEl.textContent = `${pct}%`;

    if (pct >= 100 && elapsed >= durationMs) {
      window.setTimeout(finish, 320);
      return;
    }

    rafId = window.requestAnimationFrame(tick);
  };

  rafId = window.requestAnimationFrame(tick);

  activeLoaderCleanup = () => {
    finished = true;
    isLoaderActive = false;
    window.cancelAnimationFrame(rafId);
    window.removeEventListener('keydown', onLoaderKey);
    skipBtn?.removeEventListener('click', onSkip);
  };
}

// ============================================================================
// Archive Table & Soundscape Mixer
// ============================================================================

function renderArchiveTable() {
  const tbody = document.getElementById('archive-tbody');
  const countEl = document.getElementById('archive-count');
  if (!tbody) return;

  if (countEl) {
    countEl.textContent = `${ARCHIVE_ENTRIES.length} Cataloged Editions · Click any row to inspect plate`;
  }

  tbody.innerHTML = '';
  ARCHIVE_ENTRIES.forEach((entry) => {
    const memberIdx = ROSTER.findIndex((m) => m.id === entry.memberId);
    const matchedMember = memberIdx >= 0 ? ROSTER[memberIdx] : null;

    const tr = document.createElement('tr');
    if (matchedMember) {
      tr.className = 'archive-row';
      tr.addEventListener('click', () => openMemberModal(memberIdx));
    }

    tr.innerHTML = `
      <td class="archive-cell-cat tabular-nums">${escapeHtml(entry.catalogNo)}</td>
      <td class="archive-cell-title">${escapeHtml(entry.title)}</td>
      <td class="archive-cell-member">${escapeHtml(matchedMember ? matchedMember.name : entry.memberName)}</td>
      <td class="col-medium archive-cell-medium">${escapeHtml(entry.medium)}</td>
      <td class="archive-cell-dim tabular-nums">${escapeHtml(entry.year)}</td>
      <td class="archive-cell-dim tabular-nums">${escapeHtml(entry.duration)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function renderSoundscape() {
  const grid = document.getElementById('soundscape-grid');
  const muteBtn = document.getElementById('mute-room-btn');
  if (!grid) return;

  grid.innerHTML = '';
  AMBIENT_LAYERS.forEach((layer) => {
    const active = activeAmbientLayers.has(layer.id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `soundscape-card ${active ? 'is-active' : ''}`;
    btn.setAttribute('aria-pressed', String(active));
    btn.innerHTML = `
      <div class="soundscape-card-top">
        <span class="soundscape-card-label">${escapeHtml(layer.label)}</span>
        <span class="soundscape-card-freq tabular-nums">${active ? 'Active' : escapeHtml(layer.frequencyNote)}</span>
      </div>
      <p class="soundscape-card-desc">${escapeHtml(layer.description)}</p>
    `;
    btn.addEventListener('click', () => {
      const nextActive = !activeAmbientLayers.has(layer.id);
      if (nextActive) {
        activeAmbientLayers.add(layer.id);
      } else {
        activeAmbientLayers.delete(layer.id);
      }
      audioEngine.toggleAmbientLayer(layer.id, nextActive);
      renderSoundscape();
    });
    grid.appendChild(btn);
  });

  if (muteBtn) {
    muteBtn.classList.toggle('is-hidden', activeAmbientLayers.size === 0);
  }
}

function initSoundscapeControls() {
  const volumeInput = document.getElementById('soundscape-volume');
  const muteBtn = document.getElementById('mute-room-btn');

  volumeInput?.addEventListener('input', (e) => {
    const val = parseFloat(e.target.value);
    if (!Number.isNaN(val)) {
      audioEngine.setMasterVolume(val);
    }
  });

  muteBtn?.addEventListener('click', () => {
    AMBIENT_LAYERS.forEach((layer) => {
      audioEngine.toggleAmbientLayer(layer.id, false);
    });
    activeAmbientLayers.clear();
    renderSoundscape();
  });
}

// ============================================================================
// Member Dossier Lightbox Modal
// ============================================================================

function renderModalPresence(member) {
  const host = document.getElementById('modal-presence');
  if (!host) return;

  const trimmedId = member.discordId?.trim();
  if (!trimmedId) {
    host.innerHTML = `
      <div class="lanyard-box lanyard-box--muted">
        <div class="lanyard-top-row">
          <span class="lanyard-label">Discord · Lanyard</span>
          <span class="lanyard-tag">Not Linked</span>
        </div>
        <p class="lanyard-note">
          Add <code>discordId</code> in <code>index.js</code> to stream live Discord status,
          Spotify playback, and activities via Lanyard.
        </p>
      </div>
    `;
    return;
  }

  const presence = presenceMap.get(trimmedId);
  if (!presence || presence.status === 'loading') {
    host.innerHTML = `
      <div class="lanyard-box lanyard-box--muted">
        <div class="lanyard-top-row">
          <span class="lanyard-label">Discord · Lanyard</span>
          <span class="lanyard-tag">Connecting...</span>
        </div>
      </div>
    `;
    return;
  }

  if (presence.status === 'error' || !presence.data) {
    host.innerHTML = `
      <div class="lanyard-box lanyard-box--error">
        <div class="lanyard-top-row">
          <span class="lanyard-label">Discord · Lanyard</span>
          <span class="status-text--dnd" style="font-family: var(--font-mono); font-size: 12px;">Unavailable</span>
        </div>
        <p class="lanyard-note lanyard-note--error">
          ${escapeHtml(presence.error || 'User is not monitored by Lanyard.')} Make sure this Discord ID has joined the Lanyard Discord server.
        </p>
      </div>
    `;
    return;
  }

  const data = presence.data;
  const statusMeta = DISCORD_STATUS_META[data.discord_status] || DISCORD_STATUS_META.offline;
  const avatarUrl = getDiscordAvatarUrl(data.discord_user);
  const displayName = data.discord_user.global_name || data.discord_user.username;
  const platforms = [
    data.active_on_discord_desktop && 'Desktop',
    data.active_on_discord_mobile && 'Mobile',
    data.active_on_discord_web && 'Web',
  ].filter(Boolean);

  const customStatus = data.activities?.find((a) => a.type === 4);
  const primaryActivity = data.activities?.find(
    (a) => a.type !== 4 && a.name.toLowerCase() !== 'spotify'
  );

  let spotifyHtml = '';
  if (data.listening_to_spotify && data.spotify) {
    const nowMs = Date.now();
    const { start, end } = data.spotify.timestamps;
    const total = Math.max(1, end - start);
    const elapsed = Math.max(0, Math.min(total, nowMs - start));
    const pct = Math.round((elapsed / total) * 100);

    spotifyHtml = `
      <div class="lanyard-divider-block">
        <div class="lanyard-activity-row">
          ${
            data.spotify.album_art_url
              ? `<img src="${escapeHtml(data.spotify.album_art_url)}" alt="${escapeHtml(data.spotify.album)}" referrerpolicy="no-referrer" class="lanyard-asset-img" />`
              : `<div class="lanyard-asset-fallback">${ICONS.music}</div>`
          }
          <div class="lanyard-activity-text">
            <p class="lanyard-spotify-label">Listening on Spotify</p>
            <p class="lanyard-activity-title">${escapeHtml(data.spotify.song)}</p>
            <p class="lanyard-activity-sub">${escapeHtml(data.spotify.artist)} · ${escapeHtml(data.spotify.album)}</p>
          </div>
        </div>
        <div class="spotify-progress-row">
          <div class="spotify-progress-track">
            <div class="spotify-progress-fill" style="width: ${pct}%"></div>
          </div>
          <span class="spotify-progress-time tabular-nums">${formatDurationMs(elapsed)} / ${formatDurationMs(total)}</span>
        </div>
      </div>
    `;
  }

  let activityHtml = '';
  if (primaryActivity) {
    const assetUrl = getActivityAssetUrl(primaryActivity);
    const elapsedHtml = primaryActivity.timestamps?.start
      ? `<p class="lanyard-elapsed tabular-nums">${formatDurationMs(Date.now() - primaryActivity.timestamps.start)} elapsed</p>`
      : '';

    activityHtml = `
      <div class="lanyard-divider-block">
        <div class="lanyard-activity-row">
          ${
            assetUrl
              ? `<img src="${escapeHtml(assetUrl)}" alt="${escapeHtml(primaryActivity.name)}" referrerpolicy="no-referrer" class="lanyard-asset-img lanyard-asset-img--app" />`
              : `<div class="lanyard-asset-fallback lanyard-asset-fallback--app">${ICONS.gamepad}</div>`
          }
          <div class="lanyard-activity-text">
            <p class="lanyard-activity-title">${escapeHtml(primaryActivity.name)}</p>
            ${
              primaryActivity.details
                ? `<p class="lanyard-activity-sub lanyard-activity-detail">${escapeHtml(primaryActivity.details)}</p>`
                : ''
            }
            ${
              primaryActivity.state
                ? `<p class="lanyard-activity-sub">${escapeHtml(primaryActivity.state)}</p>`
                : ''
            }
            ${elapsedHtml}
          </div>
        </div>
      </div>
    `;
  }

  const customStatusHtml =
    customStatus && (customStatus.state || customStatus.emoji?.name)
      ? `
        <div class="lanyard-divider-block lanyard-custom-status">
          ${customStatus.emoji?.name ? `<span aria-hidden="true" style="margin-right: 6px;">${escapeHtml(customStatus.emoji.name)}</span>` : ''}
          <span>${escapeHtml(customStatus.state || '')}</span>
        </div>
      `
      : '';

  host.innerHTML = `
    <div class="lanyard-box">
      <div class="lanyard-top-row">
        <div class="lanyard-user-row">
          <div class="lanyard-avatar-wrap">
            <img src="${escapeHtml(avatarUrl)}" alt="${escapeHtml(displayName)}" referrerpolicy="no-referrer" class="lanyard-avatar" />
            <span aria-hidden="true" class="lanyard-avatar-dot ${statusMeta.dotClass}"></span>
          </div>
          <div class="lanyard-user-meta">
            <div class="lanyard-name-line">
              <span class="lanyard-display-name">${escapeHtml(displayName)}</span>
              <span class="lanyard-username">@${escapeHtml(data.discord_user.username)}</span>
            </div>
            <div class="lanyard-status-line">
              <span class="${statusMeta.textClass}">${statusMeta.label}</span>
              ${
                platforms.length > 0
                  ? `<span class="lanyard-sep" aria-hidden="true">·</span><span class="lanyard-platforms">${escapeHtml(platforms.join(' · '))}</span>`
                  : ''
              }
            </div>
          </div>
        </div>
        <span class="lanyard-tag">Lanyard</span>
      </div>
      ${customStatusHtml}
      ${spotifyHtml}
      ${activityHtml}
    </div>
  `;
}

function stopMemberAudioUI() {
  isPlayingTrack = false;
  trackElapsedSec = 0;
  if (trackIntervalId !== null) {
    window.clearInterval(trackIntervalId);
    trackIntervalId = null;
  }
  audioEngine.stopMemberTrack();
  syncMemberAudioUI();
}

function syncMemberAudioUI() {
  const playBtn = document.getElementById('modal-play-btn');
  const progressBar = document.getElementById('modal-track-progress');
  const timeEl = document.getElementById('modal-track-time');
  const member = selectedIndex >= 0 ? ROSTER[selectedIndex] : null;
  const duration = member ? member.sound.durationSec : 0;

  if (playBtn) {
    playBtn.innerHTML = isPlayingTrack
      ? `${ICONS.pause}<span>Pause</span>`
      : `${ICONS.play}<span>Play Track</span>`;
  }

  if (progressBar) {
    const pct = duration > 0 ? Math.min(100, (trackElapsedSec / duration) * 100) : 0;
    progressBar.style.width = `${pct}%`;
  }

  if (timeEl) {
    timeEl.textContent = `${formatSeconds(trackElapsedSec)} / ${formatSeconds(duration)}`;
  }
}

function cancelModalAnimations() {
  if (activeModalFlipAnim) {
    activeModalFlipAnim.cancel();
    activeModalFlipAnim = null;
  }
  if (activeBackdropAnim) {
    activeBackdropAnim.cancel();
    activeBackdropAnim = null;
  }
}

function populateModal(member) {
  const plateCode = document.getElementById('modal-plate-code');
  const counter = document.getElementById('modal-counter');
  const mediaBox = document.getElementById('modal-media-box');
  const metaLine = document.getElementById('modal-meta-line');
  const titleEl = document.getElementById('modal-title');
  const statementEl = document.getElementById('modal-statement');
  const mediumEl = document.getElementById('modal-medium');
  const handleTextEl = document.getElementById('modal-handle-text');
  const handleIconEl = document.getElementById('modal-handle-icon');
  const tuningEl = document.getElementById('modal-tuning');
  const trackTitleEl = document.getElementById('modal-track-title');

  if (plateCode) plateCode.textContent = member.plateCode;
  if (counter) {
    counter.textContent = `${String(selectedIndex + 1).padStart(2, '0')} of ${String(ROSTER.length).padStart(2, '0')}`;
  }

  if (mediaBox) {
    mediaBox.innerHTML = '';
    mediaBox.appendChild(createPortraitMedia(member, 560));
  }

  if (metaLine) {
    metaLine.innerHTML = `
      <span>${escapeHtml(member.disciplineLabel)}</span>
      <span aria-hidden="true">·</span>
      <span>${escapeHtml(member.location)}</span>
      <span aria-hidden="true">·</span>
      <span class="tabular-nums">Since ${escapeHtml(member.joinedYear)}</span>
    `;
  }

  if (titleEl) titleEl.textContent = member.name;
  if (statementEl) statementEl.textContent = member.statement;
  if (mediumEl) mediumEl.textContent = member.medium;
  if (handleTextEl) handleTextEl.textContent = member.handle;
  if (handleIconEl) handleIconEl.innerHTML = ICONS.copy;
  if (tuningEl) tuningEl.textContent = `${member.sound.baseHz.toFixed(2)} Hz · ${member.sound.texture}`;
  if (trackTitleEl) trackTitleEl.textContent = member.sound.trackTitle;

  renderModalPresence(member);
  stopMemberAudioUI();
}

function openMemberModal(index, direction = 0) {
  if (index < 0 || index >= ROSTER.length) return;
  const modal = document.getElementById('member-modal');
  const dialog = document.getElementById('modal-dialog');
  if (!modal || !dialog) return;

  modalNavEpoch += 1;
  const currentEpoch = modalNavEpoch;
  const wasClosed = modal.classList.contains('is-hidden');
  selectedIndex = index;

  if (wasClosed) {
    cancelModalAnimations();
    setPickedFanCard(index);
    populateModal(ROSTER[index]);
    modal.classList.remove('is-hidden');
    dialog.focus({ preventScroll: true });

    if (!reducedMotionQuery.matches) {
      activeBackdropAnim = modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 260,
        easing: 'ease-out',
        fill: 'none',
      });
      activeModalFlipAnim = dialog.animate(
        [
          {
            offset: 0,
            opacity: 0,
            transform: 'rotateY(-88deg) rotateX(4deg) scale(0.88)',
          },
          {
            offset: 0.62,
            opacity: 1,
            transform: 'rotateY(7deg) rotateX(-1deg) scale(1.012)',
          },
          {
            offset: 1,
            opacity: 1,
            transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
          },
        ],
        {
          duration: 480,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'none',
        }
      );
      activeModalFlipAnim.onfinish = () => {
        if (currentEpoch === modalNavEpoch) {
          activeModalFlipAnim = null;
        }
      };
    }
    return;
  }

  const dir = direction >= 0 ? 1 : -1;
  setPickedFanCard(index, dir);

  if (reducedMotionQuery.matches) {
    cancelModalAnimations();
    populateModal(ROSTER[index]);
    return;
  }

  cancelModalAnimations();

  // Phase 1: Flip current profile edge-on
  const outAnim = dialog.animate(
    [
      {
        offset: 0,
        opacity: 1,
        transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
      },
      {
        offset: 1,
        opacity: 0.3,
        transform: `rotateY(${dir * -88}deg) rotateX(2deg) scale(0.94)`,
      },
    ],
    {
      duration: 170,
      easing: 'cubic-bezier(0.4, 0, 0.7, 0.2)',
      fill: 'forwards',
    }
  );
  activeModalFlipAnim = outAnim;

  outAnim.onfinish = () => {
    if (currentEpoch !== modalNavEpoch || selectedIndex < 0) {
      outAnim.cancel();
      return;
    }

    populateModal(ROSTER[selectedIndex]);
    outAnim.cancel();

    // Phase 2: Flip new profile into place from the opposite edge
    const inAnim = dialog.animate(
      [
        {
          offset: 0,
          opacity: 0.3,
          transform: `rotateY(${dir * 88}deg) rotateX(-2deg) scale(0.94)`,
        },
        {
          offset: 0.72,
          opacity: 1,
          transform: `rotateY(${dir * -5}deg) rotateX(0deg) scale(1.008)`,
        },
        {
          offset: 1,
          opacity: 1,
          transform: 'rotateY(0deg) rotateX(0deg) scale(1)',
        },
      ],
      {
        duration: 340,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'none',
      }
    );
    activeModalFlipAnim = inAnim;
    inAnim.onfinish = () => {
      if (currentEpoch === modalNavEpoch) {
        activeModalFlipAnim = null;
      }
    };
  };
}

function closeMemberModal() {
  const modal = document.getElementById('member-modal');
  const dialog = document.getElementById('modal-dialog');
  if (!modal || modal.classList.contains('is-hidden') || selectedIndex < 0) return;

  modalNavEpoch += 1;
  const currentEpoch = modalNavEpoch;
  cancelModalAnimations();
  selectedIndex = -1;
  stopMemberAudioUI();

  if (!dialog || reducedMotionQuery.matches) {
    modal.classList.add('is-hidden');
    fanPausedByHover = Boolean(document.querySelector('#roster-grid .card-front-btn:hover'));
    startFanAutoCycle();
    return;
  }

  activeBackdropAnim = modal.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 210,
    easing: 'ease-in',
    fill: 'forwards',
  });
  activeModalFlipAnim = dialog.animate(
    [
      { opacity: 1, transform: 'rotateY(0deg) rotateX(0deg) scale(1)' },
      { opacity: 0, transform: 'rotateY(52deg) rotateX(3deg) scale(0.92)' },
    ],
    {
      duration: 210,
      easing: 'cubic-bezier(0.4, 0, 1, 1)',
      fill: 'forwards',
    }
  );
  activeModalFlipAnim.onfinish = () => {
    if (currentEpoch !== modalNavEpoch || selectedIndex >= 0) return;
    cancelModalAnimations();
    modal.classList.add('is-hidden');
    fanPausedByHover = Boolean(document.querySelector('#roster-grid .card-front-btn:hover'));
    startFanAutoCycle();
  };
}

function navigateModal(step) {
  if (selectedIndex < 0) return;
  const nextIdx = (selectedIndex + step + ROSTER.length) % ROSTER.length;
  openMemberModal(nextIdx, step);
}

function initModalEvents() {
  const modal = document.getElementById('member-modal');
  const dialog = document.getElementById('modal-dialog');
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');
  const closeBtn = document.getElementById('modal-close-btn');
  const playBtn = document.getElementById('modal-play-btn');
  const handleBtn = document.getElementById('modal-handle-btn');

  modal?.addEventListener('click', closeMemberModal);
  dialog?.addEventListener('click', (e) => e.stopPropagation());
  prevBtn?.addEventListener('click', () => navigateModal(-1));
  nextBtn?.addEventListener('click', () => navigateModal(1));
  closeBtn?.addEventListener('click', closeMemberModal);

  playBtn?.addEventListener('click', () => {
    if (selectedIndex < 0) return;
    const member = ROSTER[selectedIndex];
    if (isPlayingTrack) {
      stopMemberAudioUI();
      return;
    }

    audioEngine.playMemberTrack(member.sound);
    isPlayingTrack = true;
    syncMemberAudioUI();

    trackIntervalId = window.setInterval(() => {
      if (!isPlayingTrack || selectedIndex < 0) return;
      const current = ROSTER[selectedIndex];
      if (trackElapsedSec + 1 >= current.sound.durationSec) {
        stopMemberAudioUI();
      } else {
        trackElapsedSec += 1;
        syncMemberAudioUI();
      }
    }, 1000);
  });

  handleBtn?.addEventListener('click', async () => {
    if (selectedIndex < 0) return;
    const iconEl = document.getElementById('modal-handle-icon');
    try {
      await navigator.clipboard.writeText(ROSTER[selectedIndex].handle);
      if (iconEl) iconEl.innerHTML = ICONS.check;
      window.setTimeout(() => {
        if (iconEl) iconEl.innerHTML = ICONS.copy;
      }, 1800);
    } catch {
      // Clipboard restricted
    }
  });

  window.addEventListener('keydown', (e) => {
    if (selectedIndex < 0) return;
    const target = e.target;
    const isTyping =
      target instanceof HTMLElement &&
      (target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable);

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMemberModal();
    } else if (!isTyping && e.key === 'ArrowLeft') {
      e.preventDefault();
      navigateModal(-1);
    } else if (!isTyping && e.key === 'ArrowRight') {
      e.preventDefault();
      navigateModal(1);
    }
  });
}

// ============================================================================
// YouTube Background Music Controller
// ============================================================================

let ytPlayer = null;
let ytReady = false;
let musicPlaying = false;
let musicMutedFallback = false;
let userPausedMusic = false;
let wantsAutoPlayMusic = true;
let musicVolume = BACKGROUND_MUSIC.startVolume;

function syncMusicUI() {
  const playerBox = document.getElementById('music-player');
  const toggleBtn = document.getElementById('music-toggle-btn');
  const iconHost = document.getElementById('music-toggle-icon');
  const statusEl = document.getElementById('music-status');

  const isAudiblePlaying = musicPlaying && !musicMutedFallback;

  if (playerBox) {
    playerBox.classList.toggle('is-playing', isAudiblePlaying);
  }
  if (iconHost) {
    iconHost.innerHTML = isAudiblePlaying ? ICONS.pause : ICONS.play;
  }
  if (toggleBtn) {
    toggleBtn.setAttribute(
      'aria-label',
      isAudiblePlaying ? 'Pause background music' : 'Play background music'
    );
  }
  if (statusEl) {
    if (musicPlaying && musicMutedFallback) {
      statusEl.textContent = 'Click anywhere for sound';
    } else if (musicPlaying) {
      statusEl.textContent = 'Playing';
    } else if (userPausedMusic) {
      statusEl.textContent = 'Paused';
    } else {
      statusEl.textContent = 'Starting audio...';
    }
  }
}

function tryPlayMusic() {
  wantsAutoPlayMusic = true;
  if (!ytReady || !ytPlayer || userPausedMusic) return;
  try {
    musicMutedFallback = false;
    ytPlayer.unMute();
    ytPlayer.setVolume(musicVolume);
    ytPlayer.playVideo();
    syncMusicUI();
  } catch {
    // Autoplay blocked until direct user interaction
  }
}

function unlockAndPlayMusic() {
  if (userPausedMusic) return;
  tryPlayMusic();
}

function initBackgroundMusic() {
  const toggleBtn = document.getElementById('music-toggle-btn');
  const volumeSlider = document.getElementById('music-volume');
  const titleEl = document.getElementById('music-title');

  if (volumeSlider) {
    volumeSlider.value = String(musicVolume);
    volumeSlider.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      if (Number.isNaN(val)) return;
      musicVolume = val;
      if (ytReady && ytPlayer) {
        try {
          if (val > 0 && ytPlayer.isMuted?.()) {
            musicMutedFallback = false;
            ytPlayer.unMute();
          }
          ytPlayer.setVolume(val);
          syncMusicUI();
        } catch {
          // Ignore player volume error
        }
      }
    });
  }

  toggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!ytReady || !ytPlayer) {
      wantsAutoPlayMusic = !wantsAutoPlayMusic;
      return;
    }
    try {
      if (musicPlaying && musicMutedFallback) {
        userPausedMusic = false;
        musicMutedFallback = false;
        wantsAutoPlayMusic = true;
        ytPlayer.unMute();
        ytPlayer.setVolume(musicVolume);
        ytPlayer.playVideo();
        syncMusicUI();
      } else if (musicPlaying) {
        userPausedMusic = true;
        wantsAutoPlayMusic = false;
        ytPlayer.pauseVideo();
        musicPlaying = false;
        syncMusicUI();
      } else {
        userPausedMusic = false;
        musicMutedFallback = false;
        wantsAutoPlayMusic = true;
        ytPlayer.unMute();
        ytPlayer.setVolume(musicVolume);
        ytPlayer.playVideo();
        syncMusicUI();
      }
    } catch {
      // Ignore player toggle error
    }
  });

  // Unlock / unmute playback immediately on the first user gesture anywhere
  const detachGestureListeners = () => {
    window.removeEventListener('pointerdown', onUnlockGesture, true);
    window.removeEventListener('keydown', onUnlockGesture, true);
    window.removeEventListener('touchstart', onUnlockGesture, true);
  };

  const onUnlockGesture = (e) => {
    const target = e.target;
    if (target instanceof Element && target.closest('#music-player')) return;
    if (!userPausedMusic && (!musicPlaying || musicMutedFallback || ytPlayer?.isMuted?.())) {
      musicMutedFallback = false;
      tryPlayMusic();
    }
    if (ytReady && !musicMutedFallback) {
      detachGestureListeners();
    }
  };
  window.addEventListener('pointerdown', onUnlockGesture, true);
  window.addEventListener('keydown', onUnlockGesture, true);
  window.addEventListener('touchstart', onUnlockGesture, true);

  syncMusicUI();

  const mountPlayer = () => {
    if (!window.YT || typeof window.YT.Player !== 'function') return;
    const origin =
      window.location.origin && window.location.origin !== 'null'
        ? window.location.origin
        : undefined;

    ytPlayer = new window.YT.Player('yt-music-host', {
      height: '1',
      width: '1',
      videoId: BACKGROUND_MUSIC.videoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        loop: 1,
        modestbranding: 1,
        mute: 0,
        playlist: BACKGROUND_MUSIC.videoId,
        playsinline: 1,
        rel: 0,
        start: BACKGROUND_MUSIC.startSeconds,
        origin,
      },
      events: {
        onReady: (event) => {
          ytReady = true;
          try {
            const iframe = event.target.getIframe?.();
            if (iframe) {
              iframe.setAttribute('allow', 'autoplay; encrypted-media');
            }
            const data = event.target.getVideoData?.();
            if (titleEl && data?.title) {
              titleEl.textContent = data.title;
            }
            if (wantsAutoPlayMusic && !userPausedMusic) {
              musicMutedFallback = false;
              event.target.unMute();
              event.target.setVolume(musicVolume);
              event.target.seekTo?.(BACKGROUND_MUSIC.startSeconds, true);
              event.target.playVideo();

              // Only fall back to muted autoplay if genuinely stuck unstarted/cued (never while buffering)
              window.setTimeout(() => {
                if (userPausedMusic || musicMutedFallback) return;
                const state = event.target.getPlayerState?.();
                if (state === -1 || state === 5 || state === 2) {
                  try {
                    musicMutedFallback = true;
                    event.target.mute();
                    event.target.playVideo();
                    syncMusicUI();
                  } catch {
                    // Ignore muted autoplay fallback error
                  }
                }
              }, 1600);
            }
          } catch {
            // Ignore initial setup error
          }
        },
        onAutoplayBlocked: (event) => {
          if (userPausedMusic) return;
          try {
            musicMutedFallback = true;
            event.target.mute();
            event.target.playVideo();
            syncMusicUI();
          } catch {
            // Wait for user gesture
          }
        },
        onStateChange: (event) => {
          const state = event.data;
          if (state === 1) {
            musicPlaying = true;
            try {
              musicMutedFallback = Boolean(event.target.isMuted?.());
            } catch {
              // Keep current flag
            }
            const data = event.target.getVideoData?.();
            if (titleEl && data?.title) {
              titleEl.textContent = data.title;
            }
            if (!musicMutedFallback) {
              detachGestureListeners();
            }
            syncMusicUI();
          } else if (state === 2) {
            musicPlaying = false;
            syncMusicUI();
          } else if (state === 0) {
            try {
              event.target.seekTo(BACKGROUND_MUSIC.startSeconds, true);
              event.target.playVideo();
            } catch {
              // Ignore loop replay error
            }
          }
        },
        onError: () => {
          const statusEl = document.getElementById('music-status');
          if (statusEl) statusEl.textContent = 'Track unavailable';
        },
      },
    });
  };

  if (window.YT && typeof window.YT.Player === 'function') {
    mountPlayer();
  } else {
    const prevReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prevReady === 'function') prevReady();
      mountPlayer();
    };
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);
  }
}

// ============================================================================
// Bootstrap
// ============================================================================

function initApp() {
  initBackgroundMusic();
  renderRosterGrid();
  renderArchiveTable();
  renderSoundscape();
  initSoundscapeControls();
  initModalEvents();
  startLanyard();

  document.getElementById('fan-prev-btn')?.addEventListener('click', () => {
    stepPickedFanCard(-1);
  });

  document.getElementById('fan-next-btn')?.addEventListener('click', () => {
    stepPickedFanCard(1);
  });

  document.getElementById('replay-intro-btn')?.addEventListener('click', () => {
    runLoadingScreen();
  });

  runLoadingScreen();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
