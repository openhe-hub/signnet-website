<script setup>
import { ref } from 'vue'
import { bibtex, meta, links } from '../data/content.js'

const copied = ref(false)
async function copyBibtex() {
  try {
    await navigator.clipboard.writeText(bibtex)
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    copied.value = false
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="cite glass" v-reveal>
        <div class="cite-head">
          <h3>Citation</h3>
          <button class="btn" @click="copyBibtex">
            {{ copied ? '✓ Copied' : '⧉ Copy BibTeX' }}
          </button>
        </div>
        <pre class="mono">{{ bibtex }}</pre>
      </div>

      <div class="foot-bar">
        <div class="foot-brand">
          🤟 SignNet-<span class="grad">1M</span>
          <span class="foot-venue">· {{ meta.venue }}</span>
        </div>
        <div class="foot-links">
          <a :href="links.paper" target="_blank" rel="noopener">Paper</a>
          <a :href="links.github" target="_blank" rel="noopener">GitHub</a>
          <a :href="links.huggingface" target="_blank" rel="noopener">HuggingFace</a>
          <a :href="links.arxiv" target="_blank" rel="noopener">arXiv</a>
        </div>
      </div>

      <p class="legal">
        Dataset released under a non-commercial license with a standardized data card.
        Website template © the authors. Replace placeholder links before publishing.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 0 3rem;
  border-top: 1px solid var(--border);
  margin-top: 2rem;
}
.cite { padding: 1.6rem; }
.cite-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.cite-head h3 { font-size: 1.2rem; }
.cite pre {
  margin: 0;
  padding: 1.2rem;
  background: rgba(0, 0, 0, 0.35);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-soft);
  font-size: 0.82rem;
  overflow-x: auto;
  white-space: pre;
  line-height: 1.5;
}
.foot-bar {
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.foot-brand { font-weight: 800; font-size: 1.1rem; }
.foot-venue { color: var(--text-dim); font-weight: 500; font-size: 0.9rem; }
.grad {
  background: var(--grad-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.foot-links { display: flex; gap: 1.4rem; }
.foot-links a {
  color: var(--text-soft);
  font-size: 0.92rem;
  font-weight: 500;
  transition: color 0.15s ease;
}
.foot-links a:hover { color: var(--text); }
.legal {
  margin-top: 1.5rem;
  color: var(--text-dim);
  font-size: 0.82rem;
}
</style>
