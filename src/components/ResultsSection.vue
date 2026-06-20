<script setup>
import { ref, computed } from 'vue'
import { resultTabs, resultFigures } from '../data/content.js'
import ResultTable from './ResultTable.vue'

const active = ref(resultTabs[0].key)
const current = computed(() => resultTabs.find((t) => t.key === active.value))
</script>

<template>
  <section id="results" class="section">
    <div class="container">
      <div v-reveal>
        <p class="section-eyebrow">Results</p>
        <h2 class="section-title">Big gaps, <span class="grad">bigger gains</span></h2>
        <p class="section-lead">
          Zero-shot evaluation on SignNet-1M reveals severe robustness gaps across
          models and datasets; training on SignNet-1M consistently recovers and
          improves performance—up to <strong>+14.71</strong> BLEU-4.
        </p>
      </div>

      <div class="tabs" v-reveal>
        <button
          v-for="t in resultTabs"
          :key="t.key"
          class="tab"
          :class="{ active: active === t.key }"
          @click="active = t.key"
        >
          {{ t.label }}
        </button>
      </div>

      <div class="table-area" v-reveal>
        <ResultTable :table="current.table" />
        <p v-if="current.table.werNote" class="cap">{{ current.table.werNote }}</p>
        <p v-else-if="current.table.note" class="cap">{{ current.table.note }}</p>
        <p class="cap">{{ current.table.caption }}</p>
      </div>

      <!-- Analysis figures -->
      <div class="figs">
        <figure
          v-for="(f, i) in resultFigures"
          :key="f.src"
          class="fig glass"
          v-reveal
          :style="{ transitionDelay: i * 70 + 'ms' }"
        >
          <img :src="f.src" :alt="f.title" loading="lazy" />
          <figcaption>
            <strong>{{ f.title }}</strong>
            <span>{{ f.caption }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tabs {
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tab {
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-soft);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.15s ease;
}
.tab:hover { color: var(--text); border-color: var(--border-strong); }
.tab.active {
  background: var(--grad);
  color: #0a0a12;
  border-color: transparent;
}
.table-area { margin-top: 1.2rem; }
.cap {
  margin: 0.8rem 0 0;
  color: var(--text-dim);
  font-size: 0.84rem;
}
.figs {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
}
.fig { overflow: hidden; transition: opacity 0.6s ease, transform 0.6s ease; }
.fig img {
  width: 100%;
  display: block;
  background: #fff;
}
.fig figcaption {
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.fig figcaption strong { font-size: 0.95rem; }
.fig figcaption span { color: var(--text-soft); font-size: 0.82rem; }
@media (max-width: 900px) {
  .figs { grid-template-columns: 1fr; }
}
</style>
