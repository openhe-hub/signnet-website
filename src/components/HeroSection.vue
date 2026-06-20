<script setup>
import { meta, heroStats, links } from '../data/content.js'
import StatCard from './StatCard.vue'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-inner">
      <div class="badge">
        <span class="dot"></span> {{ meta.venue }} · Accepted
      </div>

      <h1 class="title">
        <span class="grad">SignNet-1M</span>
      </h1>
      <p class="subtitle">{{ meta.subtitle }}</p>

      <p class="authors">
        {{ meta.authors }} &nbsp;·&nbsp; {{ meta.institution }}
      </p>

      <div class="cta">
        <a class="btn btn-primary" :href="links.paper" target="_blank" rel="noopener">
          📄 Paper
        </a>
        <a class="btn" :href="links.arxiv" target="_blank" rel="noopener">
          arXiv
        </a>
        <a class="btn" :href="links.github" target="_blank" rel="noopener">
          💻 Code
        </a>
        <a class="btn" :href="links.huggingface" target="_blank" rel="noopener">
          🤗 Dataset
        </a>
        <a class="btn" href="#demo">▶ Demo</a>
      </div>

      <div class="stats">
        <StatCard
          v-for="s in heroStats"
          :key="s.label"
          :value="s.value"
          :label="s.label"
        />
      </div>
    </div>

    <a class="scroll-hint" href="#abstract" aria-label="Scroll down">
      <span></span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: calc(var(--nav-h) + 2rem) 0 4rem;
}
.hero-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.95rem;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
  background: var(--surface);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-soft);
  margin-bottom: 1.6rem;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gain);
  box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.18);
}
.title {
  font-size: clamp(3rem, 9vw, 6.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
}
.title .grad {
  background: linear-gradient(120deg, #ddd6fe 0%, #a5b4fc 35%, #7dd3fc 70%, #f0abfc 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.subtitle {
  margin: 1.3rem auto 0;
  max-width: 42rem;
  font-size: clamp(1.05rem, 2.2vw, 1.4rem);
  color: var(--text-soft);
  font-weight: 500;
}
.authors {
  margin-top: 1rem;
  color: var(--text-dim);
  font-size: 0.95rem;
}
.cta {
  margin-top: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  justify-content: center;
}
.stats {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.8rem;
  width: 100%;
}
@media (max-width: 900px) {
  .stats { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 480px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
}

.scroll-hint {
  position: absolute;
  bottom: 1.6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 26px;
  height: 42px;
  border: 2px solid var(--border-strong);
  border-radius: 999px;
  display: flex;
  justify-content: center;
  padding-top: 7px;
}
.scroll-hint span {
  width: 4px;
  height: 8px;
  border-radius: 4px;
  background: var(--text-soft);
  animation: scrolldot 1.6s ease-in-out infinite;
}
@keyframes scrolldot {
  0% { transform: translateY(0); opacity: 1; }
  70% { transform: translateY(12px); opacity: 0; }
  100% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .scroll-hint span { animation: none; }
}
</style>
