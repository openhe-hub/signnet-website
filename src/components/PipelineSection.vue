<script setup>
import { pipelineStages, augMix } from '../data/content.js'

const overviewSrc = 'assets/overview.png'
</script>

<template>
  <section id="pipeline" class="section">
    <div class="container">
      <div v-reveal>
        <p class="section-eyebrow">Augmentation Pipeline</p>
        <h2 class="section-title">Three stages, <span class="grad">structure-aware</span></h2>
        <p class="section-lead">
          A scalable pipeline that injects realistic variation along viewpoint,
          background, and identity—while preserving the fine-grained hand, body,
          and facial motion that carries linguistic meaning.
        </p>
      </div>

      <figure class="overview" v-reveal>
        <img :src="overviewSrc" alt="Overview of the SignNet-1M augmentation pipeline" loading="lazy" />
      </figure>

      <div class="stages">
        <article
          v-for="(s, i) in pipelineStages"
          :key="s.n"
          class="stage glass"
          v-reveal
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="stage-n">{{ String(s.n).padStart(2, '0') }}</div>
          <h3>{{ s.title }}</h3>
          <div class="stage-tools chip">{{ s.tools }}</div>
          <p>{{ s.body }}</p>
        </article>
      </div>

      <!-- Augmentation mix -->
      <div class="mix" v-reveal>
        <div class="mix-col glass">
          <h4>Generative augmentation mix</h4>
          <div v-for="m in augMix.generative" :key="m.label" class="mix-row">
            <div class="mix-label">{{ m.label }}</div>
            <div class="mix-bar"><span :style="{ width: m.pct + '%' }"></span></div>
            <div class="mix-pct mono">{{ m.pct }}%</div>
          </div>
        </div>
        <div class="mix-col glass">
          <h4>Post-rendering mix (×12)</h4>
          <div v-for="m in augMix.postRender" :key="m.label" class="mix-row">
            <div class="mix-label">{{ m.label }}</div>
            <div class="mix-bar alt"><span :style="{ width: m.pct + '%' }"></span></div>
            <div class="mix-pct mono">{{ m.pct }}%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overview {
  margin: 2.5rem 0 0;
  padding: 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--surface);
}
.overview img {
  width: 100%;
  display: block;
  border-radius: var(--radius-sm);
}
.stages {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
}
.stage {
  padding: 1.6rem;
  position: relative;
  transition: transform 0.18s ease, border-color 0.18s ease, opacity 0.6s ease;
}
.stage:hover { transform: translateY(-4px); border-color: var(--border-strong); }
.stage-n {
  font-family: var(--mono);
  font-size: 2rem;
  font-weight: 800;
  background: var(--grad-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stage h3 { font-size: 1.15rem; margin: 0.3rem 0 0.6rem; }
.stage-tools { margin-bottom: 0.7rem; color: var(--accent-2); border-color: rgba(56,189,248,0.3); }
.stage p { color: var(--text-soft); font-size: 0.93rem; margin: 0; }

.mix {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.mix-col { padding: 1.5rem; }
.mix-col h4 { font-size: 1rem; margin-bottom: 1rem; }
.mix-row {
  display: grid;
  grid-template-columns: 1fr 100px 48px;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.7rem;
}
.mix-label { font-size: 0.82rem; color: var(--text-soft); }
.mix-bar {
  height: 7px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 999px;
  overflow: hidden;
}
.mix-bar span {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
}
.mix-bar.alt span {
  background: linear-gradient(90deg, var(--accent-3), var(--accent));
}
.mix-pct { font-size: 0.82rem; text-align: right; color: var(--text); }
@media (max-width: 800px) {
  .stages { grid-template-columns: 1fr; }
  .mix { grid-template-columns: 1fr; }
  .mix-row { grid-template-columns: 1fr 70px 40px; }
}
</style>
