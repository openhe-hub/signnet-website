// =============================================================================
// SignNet-1M — single source of truth for all site content.
// All experimental numbers are taken verbatim from the ECCV 2026 paper.
// =============================================================================

export const links = {
  paper: 'assets/signnet-1m-paper.pdf',
  arxiv: '#',
  github: 'https://github.com/openhe-hub/SignNet-1M',
  huggingface: '#',
  video: 'assets/demo.mp4',
}

export const meta = {
  title: 'SignNet-1M',
  subtitle:
    'Large-Scale Multilingual Sign Language Video Dataset with Downstream Benchmarks',
  venue: 'ECCV 2026',
  authors: [
    { name: 'Zhewen He', refs: ['1'] },
    { name: 'Junyi Hu', refs: ['1'] },
    { name: 'Haomian Huang', refs: ['1'] },
    { name: 'Zhenhua Li', refs: ['1', '2'] },
    { name: 'Yu-Shen Liu', refs: ['3'] },
    { name: 'Yi Fang', refs: ['1', '2'], prefix: 'and' },
  ],
  institutions: [
    { n: '1', name: 'New York University Abu Dhabi, UAE' },
    { n: '2', name: 'ChatSign Technology' },
    { n: '3', name: 'Tsinghua University, China' },
  ],
  emails: ['zh3510@nyu.edu', 'yf23@nyu.edu'],
}

export const heroStats = [
  { value: '~1M', label: 'Augmented clips' },
  { value: '3', label: 'Languages · ASL / CSL / DGS' },
  { value: '2,058', label: 'Hours of video' },
  { value: '~10K', label: 'Signer identities' },
  { value: '7', label: 'Source corpora' },
  { value: '7.41s', label: 'Avg. clip length' },
]

export const abstract = `Sign language translation (SLT) has advanced rapidly on standard benchmarks such as Phoenix14T, How2Sign, and CSL-Daily, yet these datasets are captured under constrained conditions—near-frontal cameras, studio backgrounds, and few signers—that poorly represent real-world deployment. State-of-the-art models are consequently brittle to three major distribution shifts: viewpoint, background, and signer appearance. We introduce SignNet-1M, a large-scale augmented multilingual sign language dataset of ~1M clips across three languages (ASL, DGS, CSL) drawn from seven source corpora. Each clip is augmented along three axes: (i) viewpoint via 3DGS novel-view rendering (GUAVA), (ii) background via diffusion-based scene editing (FlowPortal + IC-Light), and (iii) identity via cross-reenactment signer substitution. We additionally apply a lightweight post-rendering augmentation stage to further broaden clip diversity. We pair the dataset with an evaluation protocol (Orig / Zero-shot / Trained) that quantifies both the coverage blind spot of existing benchmarks and the training value of augmented data. On multiple sign language understanding tasks and backbones, SignNet-1M reveals substantial robustness gaps and demonstrates large training gains, confirming that structure-aware augmentation at scale is essential for robust real-world sign language systems.`

export const contributions = [
  {
    icon: '🗂️',
    title: 'SignNet-1M Dataset',
    body: '~1M augmented clips spanning ASL, DGS, and CSL with controllable viewpoint, background, and identity variations, built from seven public and self-collected source corpora.',
  },
  {
    icon: '⚙️',
    title: 'Scalable Augmentation Pipeline',
    body: '3D Gaussian Splatting novel-view rendering, diffusion-based scene/identity editing, and lightweight post-rendering augmentations—engineered to preserve sign dynamics and linguistic labels.',
  },
  {
    icon: '📊',
    title: 'Robustness Benchmark',
    body: 'A unified Orig / Zero-shot / Trained protocol with severity-stratified analysis that reveals where SLT/SLR models fail and how augmented training recovers performance.',
  },
]

// Per-language breakdown. accent keys map to CSS classes lang-asl / lang-csl / lang-dgs.
export const languages = [
  {
    code: 'ASL',
    name: 'American Sign Language',
    share: 70,
    clips: '~700K',
    accent: 'asl',
    sources: ['How2Sign', 'OpenASL', 'ASL50K', 'YouTube-ASL'],
  },
  {
    code: 'CSL',
    name: 'Chinese Sign Language',
    share: 20,
    clips: '~200K',
    accent: 'csl',
    sources: ['CSL-Daily', 'CSL-News'],
  },
  {
    code: 'DGS',
    name: 'German Sign Language',
    share: 10,
    clips: '~100K',
    accent: 'dgs',
    sources: ['Phoenix14T'],
  },
]

// Source corpora comparison table.
export const sourceComparison = {
  columns: ['Corpus', 'Language', 'Clips', 'Hours', 'Signers'],
  rows: [
    ['Phoenix14T', 'DGS', '8.26K', '11', '9'],
    ['How2Sign', 'ASL', '35.00K', '80', '11'],
    ['OpenASL', 'ASL', '98.42K', '288', '~220'],
    ['YouTube-ASL', 'ASL', '610.19K', '984', '~2.5K'],
    ['CSL-Daily', 'CSL', '20.65K', '23', '~10'],
    ['CSL-News', 'CSL', '751.32K', '1,985', '~20'],
  ],
  highlight: ['SignNet-1M (ours)', 'ASL/CSL/DGS', '~1M', '2,058', '~10K'],
}

export const pipelineStages = [
  {
    n: 1,
    title: 'Background Replacement',
    tools: 'FlowPortal + IC-Light',
    body: 'Diffusion-based scene editing with illumination-aware conditioning. Temporally consistent soft alpha mattes preserve signer motion and geometry while altering background and lighting. Stratified into 10 severity levels (L1–L10) by photometric shift.',
  },
  {
    n: 2,
    title: 'Novel-View & Cross-Identity',
    tools: '3DGS · GUAVA · EHM-Tracker',
    body: 'EHM-Tracker fits SMPL-X + FLAME per frame, factorizing constant identity from time-varying motion. A 3D Gaussian Splatting avatar is rendered under 10 camera presets (yaw 0°→30°, pitch 0°→25°, zoom 1.0→[0.6,1.5]) and re-enacted with new signer identities, then alpha-composited onto the background.',
  },
  {
    n: 3,
    title: 'Post-Rendering Augmentation',
    tools: 'Video-consistent transforms',
    body: 'Lightweight image-space transforms (crop, rotate, color/contrast jitter, blur, compression) and mild temporal resampling (speed jitter, frame dropping) broaden appearance diversity while preserving linguistic annotations.',
  },
]

// Augmentation mix composition (for the composition donut-style readout).
export const augMix = {
  generative: [
    { label: 'Novel-view (yaw/pitch/zoom/dynamic/mix)', pct: 80 },
    { label: 'Background editing', pct: 10 },
    { label: 'Identity editing', pct: 10 },
  ],
  postRender: [
    { label: 'Origin', pct: 20 },
    { label: 'Geometric (crop, rotate, perspective)', pct: 24 },
    { label: 'Color (brightness, saturation, gamma)', pct: 28 },
    { label: 'Degradation (blur, noise, compression)', pct: 16 },
    { label: 'Temporal (frame-rate, speed, low-fps)', pct: 12 },
  ],
}

export const protocol = [
  {
    name: 'Orig.',
    tag: 'baseline',
    body: 'Official split and training setup on the source benchmark.',
  },
  {
    name: 'Zero-shot',
    tag: 'measures gap',
    body: 'A model trained on the original data, evaluated on the SignNet-1M test set—exposing the robustness gap to distribution shifts.',
  },
  {
    name: 'Trained',
    tag: 'measures gain',
    body: 'Trained on the SignNet-1M train set and evaluated on its test set—showing the gain from augmented data.',
  },
]

export const protocolMetrics = [
  { formula: 'Gap = Zero-shot − Orig.', note: 'Negative ⇒ sensitivity to shifts', kind: 'gap' },
  { formula: 'Gain = Trained − Zero-shot', note: 'Positive ⇒ robustness recovered', kind: 'gain' },
]

// ---- Result tables -------------------------------------------------------
// Each table: { columns, rows, gapCol, gainCol } where gapCol/gainCol index
// the columns that should be colour-coded.

export const sltTable = {
  caption: 'Sign Language Translation — BLEU-4. Gap = Zero-shot − Orig.; Gain = Trained − Zero-shot.',
  columns: ['Dataset', 'Method', 'Orig.', 'Zero-shot', 'Trained', 'Gap', 'Gain'],
  gapCol: 5,
  gainCol: 6,
  rows: [
    ['Phoenix14T', 'SpaMo', '22.49', '7.81', '18.98', '-14.68', '+11.17'],
    ['Phoenix14T', 'GASLT', '15.74', '1.26', '14.95', '-14.48', '+13.69'],
    ['Phoenix14T', 'FPT4SLT', '19.18', '7.25', '18.72', '-11.93', '+11.47'],
    ['How2Sign', 'SpaMo', '10.11', '6.25', '10.36', '-3.86', '+4.11'],
    ['How2Sign', 'UniSign', '14.50', '6.47', '12.83', '-8.03', '+6.36'],
    ['OpenASL', 'SpaMo', '10.32', '0.34', '9.71', '-9.98', '+9.37'],
    ['OpenASL', 'UniSign', '22.67', '8.12', '22.83', '-14.55', '+14.71'],
    ['CSL-Daily', 'SpaMo', '20.55', '12.70', '21.32', '-7.85', '+8.62'],
    ['CSL-Daily', 'UniSign', '25.27', '13.47', '21.66', '-11.80', '+8.19'],
    ['CSL-Daily', 'GASLT', '4.07', '0.12', '3.68', '-3.95', '+3.56'],
  ],
}

export const slrTable = {
  caption: 'Sign Language Recognition — WER% (lower is better). Gap/Gain in WER points.',
  columns: ['Dataset', 'Method', 'Orig.', 'Zero-shot', 'Trained', 'Gap', 'Gain'],
  gapCol: 5,
  gainCol: 6,
  // For WER, a worse zero-shot is a positive number; we report Gap as the
  // increase (red) and Gain as the recovery (green) to match the paper.
  rows: [
    ['Phoenix14T', 'Online-CSLR', '22.21', '51.45', '28.19', '+29.24', '-23.26'],
    ['CSL-Daily', 'UniSign', '28.20', '56.90', '30.74', '+28.70', '-26.16'],
  ],
  werNote:
    'WER% — for recognition, Gap is the error increase under shift (red) and Gain is the error reduction after training on SignNet-1M (green).',
}

export const ablationTable = {
  caption: 'Ablation — BLEU-4 of each augmentation component (Zero-shot / Trained).',
  columns: [
    'Configuration',
    'Phoenix14T ZS',
    'Phoenix14T Tr',
    'How2Sign ZS',
    'How2Sign Tr',
  ],
  rows: [
    ['Novel View', '7.10', '18.85', '6.09', '10.32'],
    ['  + yaw', '8.17', '18.59', '7.09', '10.78'],
    ['  + pitch', '6.98', '18.36', '4.06', '9.04'],
    ['  + zoom', '8.89', '18.98', '7.81', '11.05'],
    ['  + dynamic camera', '6.87', '17.13', '6.16', '8.70'],
    ['Scene editing', '4.91', '12.53', '3.28', '9.26'],
    ['Identity editing', '13.06', '22.04', '8.67', '12.54'],
    ['Post-rendering aug.', '5.37', '18.16', '2.51', '10.17'],
    ['Full SignNet-1M', '7.81', '18.98', '6.25', '10.36'],
  ],
  emphasizeLast: true,
}

export const qualityTable = {
  caption:
    'Visual quality of augmented vs. original videos. Lower FID-VID / FVD and higher SSIM / PSNR are better.',
  columns: [
    'Dataset',
    'FID-VID Orig.',
    'FID-VID Aug.',
    'FVD Orig.',
    'FVD Aug.',
    'SSIM',
    'PSNR',
  ],
  rows: [
    ['Phoenix14T', '49.96', '49.22', '141.57', '119.82', '0.92', '25.30'],
    ['How2Sign', '47.26', '48.68', '118.69', '123.84', '0.91', '27.98'],
    ['ASL50K', '43.41', '44.06', '119.15', '137.52', '0.83', '21.83'],
    ['OpenASL', '49.52', '48.29', '157.79', '121.44', '0.81', '23.00'],
    ['CSL-Daily', '40.39', '39.80', '124.45', '136.34', '0.88', '23.24'],
  ],
  note: 'FID-VID stays within [-2.5%, +3.0%]; FVD within [-23.0%, +15.4%]; SSIM ≥ 0.81 across all datasets.',
}

export const resultTabs = [
  { key: 'slt', label: 'Translation (BLEU-4)', table: sltTable },
  { key: 'slr', label: 'Recognition (WER%)', table: slrTable },
  { key: 'ablation', label: 'Ablation', table: ablationTable },
  { key: 'quality', label: 'Visual Quality', table: qualityTable },
]

export const resultFigures = [
  {
    src: 'assets/phoenix_difficulty.png',
    title: 'Severity-stratified performance',
    caption:
      'BLEU-4 on Phoenix14T across viewpoint and lighting severity levels (L1–L10). Zero-shot models collapse as severity grows; training on SignNet-1M flattens the drop and the gain increases at harder levels.',
  },
  {
    src: 'assets/scale_bleu4.png',
    title: 'Scaling with augmentation factor K',
    caption:
      'BLEU-4 vs. training epoch under increasing augmentation scale K (K=2, 5, 10) on Phoenix14T and How2Sign. Larger augmentation budgets yield monotonically stronger robustness.',
  },
  {
    src: 'assets/scale_bleu4_gpu_hours.png',
    title: 'Matched-compute scaling',
    caption:
      'BLEU-4 vs. GPU hours for SpaMo under increasing augmentation scale K—gains hold under a matched compute budget.',
  },
]

export const sampleFigures = [
  {
    src: 'assets/samples.png',
    title: 'Augmentation gallery',
    caption:
      'Qualitative examples: novel-view camera augmentations (pitch, yaw, zoom, dynamic), cross-identity reenactment, background replacement, post-rendering augmentations, and the camera orbit space.',
  },
  {
    src: 'assets/composition.png',
    title: 'Dataset composition',
    caption:
      'SignNet-1M composition: source-language split (ASL 70% / CSL 20% / DGS 10%), generative augmentation mix (novel-view 80% / background 10% / identity 10%), and post-rendering mix.',
  },
]

export const downloads = [
  {
    icon: '🤗',
    title: 'Dataset on HuggingFace',
    body: '~1M augmented clips with sentence-level translations, gloss annotations (DGS/CSL), and augmentation metadata (factor axis + severity). Released under a non-commercial license with a standardized data card.',
    cta: 'Browse the dataset',
    href: links.huggingface,
  },
  {
    icon: '💻',
    title: 'Code & Resources on GitHub',
    body: 'Augmentation pipeline (3DGS rendering, diffusion editing, post-rendering), the Orig / Zero-shot / Trained benchmark protocol, evaluation scripts, and training configs for all backbones.',
    cta: 'View the repository',
    href: links.github,
  },
]

export const releasePlan = [
  {
    date: '2026.Jun',
    title: 'Sample Release',
    body: 'Open-source sample dataset and core 3DGS code.',
  },
  {
    date: '2026.Jul',
    title: 'ASL Release',
    body: 'Open-source the full ASL dataset and complete 3DGS code.',
  },
  {
    date: '2026.Sept',
    title: 'Full Release',
    body: 'Open-source the full dataset and complete generation, translation, and evaluation code.',
  },
]

export const bibtex = `@inproceedings{signnet1m2026,
  title     = {SignNet-1M: Large-Scale Multilingual Sign Language Video
               Dataset with Downstream Benchmarks},
  author    = {He, Zhewen and Hu, Junyi and Huang, Haomian and Li, Zhenhua
               and Liu, Yu-Shen and Fang, Yi},
  booktitle = {European Conference on Computer Vision (ECCV)},
  year      = {2026}
}`
