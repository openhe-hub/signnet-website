<script setup>
import { protocol, protocolMetrics } from '../data/content.js'
</script>

<template>
  <section id="benchmark" class="section">
    <div class="container">
      <div v-reveal>
        <p class="section-eyebrow">Benchmark Protocol</p>
        <h2 class="section-title">Measuring the <span class="grad">robustness gap</span></h2>
        <p class="section-lead">
          A unified protocol over three conditions exposes both the coverage blind
          spot of existing benchmarks and the training value of augmented data, with
          severity-stratified analysis across viewpoint and lighting (L1–L10).
        </p>
      </div>

      <div class="proto-grid">
        <article
          v-for="(p, i) in protocol"
          :key="p.name"
          class="proto glass"
          v-reveal
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="proto-head">
            <span class="proto-name mono">{{ p.name }}</span>
            <span class="proto-tag" :class="p.tag.replace(' ', '-')">{{ p.tag }}</span>
          </div>
          <p>{{ p.body }}</p>
          <div v-if="i < protocol.length - 1" class="arrow">→</div>
        </article>
      </div>

      <div class="metrics" v-reveal>
        <div
          v-for="m in protocolMetrics"
          :key="m.formula"
          class="metric glass"
          :class="m.kind"
        >
          <div class="metric-formula mono">{{ m.formula }}</div>
          <div class="metric-note">{{ m.note }}</div>
        </div>
      </div>

      <div class="tasks" v-reveal>
        <div class="task glass">
          <span class="task-pill">SLT</span>
          <div>
            <strong>Sign Language Translation</strong>
            <p>Video → spoken sentence, across all languages. Primary metric: BLEU-4.</p>
          </div>
        </div>
        <div class="task glass">
          <span class="task-pill alt">SLR</span>
          <div>
            <strong>Sign Language Recognition</strong>
            <p>Video → gloss sequence (DGS &amp; CSL). Metric: WER% (lower is better).</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proto-grid {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
}
.proto {
  padding: 1.6rem;
  position: relative;
  transition: transform 0.18s ease, border-color 0.18s ease, opacity 0.6s ease;
}
.proto:hover { transform: translateY(-4px); border-color: var(--border-strong); }
.proto-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.7rem;
}
.proto-name { font-size: 1.3rem; font-weight: 800; }
.proto-tag {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  color: var(--text-dim);
}
.proto-tag.measures-gap { color: var(--gap); border-color: rgba(251,113,133,0.35); }
.proto-tag.measures-gain { color: var(--gain); border-color: rgba(52,211,153,0.35); }
.proto p { color: var(--text-soft); font-size: 0.93rem; margin: 0; }
.arrow {
  position: absolute;
  right: -0.85rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3rem;
  color: var(--text-dim);
  z-index: 2;
}

.metrics {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.metric {
  padding: 1.3rem 1.5rem;
  border-left: 3px solid var(--border-strong);
}
.metric.gap { border-left-color: var(--gap); }
.metric.gain { border-left-color: var(--gain); }
.metric-formula { font-size: 1.1rem; font-weight: 700; }
.metric.gap .metric-formula { color: var(--gap); }
.metric.gain .metric-formula { color: var(--gain); }
.metric-note { color: var(--text-soft); font-size: 0.88rem; margin-top: 0.3rem; }

.tasks {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.task {
  padding: 1.3rem 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.task-pill {
  font-weight: 800;
  font-size: 0.85rem;
  padding: 0.35rem 0.7rem;
  border-radius: 8px;
  background: rgba(56, 189, 248, 0.16);
  color: var(--accent-2);
  flex-shrink: 0;
}
.task-pill.alt { background: rgba(244, 114, 182, 0.16); color: var(--accent-3); }
.task strong { font-size: 1rem; }
.task p { color: var(--text-soft); font-size: 0.88rem; margin: 0.25rem 0 0; }

@media (max-width: 800px) {
  .proto-grid { grid-template-columns: 1fr; }
  .arrow { display: none; }
  .metrics, .tasks { grid-template-columns: 1fr; }
}
</style>
