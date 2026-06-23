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

      <div class="author-block" aria-label="Authors and affiliations">
        <p class="author-line">
          <span
            v-for="(author, i) in meta.authors"
            :key="author.name"
            class="author"
          >
            <span v-if="author.prefix" class="author-prefix">{{ author.prefix }}</span>
            {{ author.name }}<sup>{{ author.refs.join(',') }}</sup><span v-if="i < meta.authors.length - 1">,</span>
          </span>
        </p>

        <p
          v-for="inst in meta.institutions"
          :key="inst.n"
          class="institution-line"
        >
          <sup>{{ inst.n }}</sup>
          <span>{{ inst.name }}</span>
        </p>

        <p class="email-line mono">{{ meta.emails.join(', ') }}</p>
      </div>

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
.author-block {
  margin-top: 1.25rem;
  color: var(--text-soft);
  text-align: center;
  max-width: 67rem;
}
.author-line {
  margin: 0 auto 0.9rem;
  font-size: clamp(1.02rem, 1.9vw, 1.35rem);
  line-height: 1.35;
  color: var(--text);
  font-weight: 500;
}
.author {
  display: inline;
  white-space: nowrap;
}
.author + .author {
  margin-left: 0.22em;
}
.author-prefix {
  margin-right: 0.22em;
}
.author sup,
.institution-line sup {
  font-size: 0.62em;
  line-height: 0;
  margin-left: 0.08em;
  vertical-align: super;
  color: var(--text);
}
.institution-line {
  margin: 0.08rem 0 0;
  color: var(--text-soft);
  font-size: clamp(0.95rem, 1.45vw, 1.12rem);
  line-height: 1.25;
}
.institution-line sup {
  display: inline-block;
  width: 1.3em;
  margin: 0 0.45em 0 0;
  text-align: right;
  color: var(--text-soft);
}
.email-line {
  margin: 0.55rem 0 0;
  color: var(--text);
  font-size: clamp(0.9rem, 1.3vw, 1rem);
  font-weight: 700;
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
