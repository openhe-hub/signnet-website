<script setup>
import { languages, sourceComparison } from '../data/content.js'
</script>

<template>
  <section id="dataset" class="section">
    <div class="container">
      <div v-reveal>
        <p class="section-eyebrow">The Dataset</p>
        <h2 class="section-title">~1M clips across <span class="grad">three languages</span></h2>
        <p class="section-lead">
          SignNet-1M is built from seven public and self-collected source corpora,
          adding controlled factor shifts in viewpoint, background, and signer
          identity while preserving sign motion and linguistic annotations. Every
          clip carries sentence-level translations; DGS and CSL subsets add gloss
          annotations, and all augmentations are tagged with factor axis and severity.
        </p>
      </div>

      <!-- Language breakdown -->
      <div class="lang-grid">
        <article
          v-for="(l, i) in languages"
          :key="l.code"
          class="lang glass"
          :class="'lang-' + l.accent"
          v-reveal
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="lang-head">
            <span class="lang-code">{{ l.code }}</span>
            <span class="lang-clips">{{ l.clips }}</span>
          </div>
          <div class="lang-name">{{ l.name }}</div>
          <div class="bar">
            <div class="bar-fill" :style="{ width: l.share + '%' }"></div>
          </div>
          <div class="lang-share">{{ l.share }}% of dataset</div>
          <div class="lang-sources">
            <span v-for="s in l.sources" :key="s" class="chip">{{ s }}</span>
          </div>
        </article>
      </div>

      <!-- Source comparison -->
      <div class="table-block" v-reveal>
        <h3 class="block-title">Source corpora</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th v-for="(c, i) in sourceComparison.columns" :key="c" :class="{ num: i >= 2 }">
                  {{ c }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in sourceComparison.rows" :key="row[0]">
                <td v-for="(cell, c) in row" :key="c" :class="{ num: c >= 2, mono: c >= 2, label: c < 2 }">
                  {{ cell }}
                </td>
              </tr>
              <tr class="row-emph">
                <td
                  v-for="(cell, c) in sourceComparison.highlight"
                  :key="c"
                  :class="{ num: c >= 2, mono: c >= 2 }"
                >
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.lang-grid {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
}
.lang {
  padding: 1.5rem;
  border-top: 3px solid var(--c);
  transition: transform 0.18s ease, opacity 0.6s ease, transform 0.6s ease;
}
.lang:hover { transform: translateY(-4px); }
.lang-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.lang-code {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--c);
  letter-spacing: -0.02em;
}
.lang-clips {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 1.05rem;
}
.lang-name {
  color: var(--text-soft);
  font-size: 0.92rem;
  margin-top: 0.15rem;
}
.bar {
  margin-top: 1rem;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  overflow: hidden;
}
.bar-fill {
  height: 100%;
  border-radius: 999px;
  background: var(--c);
}
.lang-share {
  margin-top: 0.45rem;
  font-size: 0.82rem;
  color: var(--text-dim);
}
.lang-sources {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.table-block { margin-top: 3rem; }
.block-title { font-size: 1.2rem; margin-bottom: 1rem; }
.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  min-width: 520px;
}
thead th {
  background: rgba(18, 18, 30, 0.92);
  color: var(--text-soft);
  font-weight: 600;
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: left;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--border-strong);
  white-space: nowrap;
}
thead th.num { text-align: right; }
tbody td {
  padding: 0.6rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
tbody tr:hover td { background: rgba(255, 255, 255, 0.03); }
td.num { text-align: right; }
td.label { color: var(--text-soft); white-space: nowrap; }
.row-emph td {
  background: rgba(139, 92, 246, 0.12);
  font-weight: 700;
  border-bottom: none;
}
@media (max-width: 800px) {
  .lang-grid { grid-template-columns: 1fr; }
}
</style>
