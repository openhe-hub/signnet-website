<script setup>
import { downloads } from '../data/content.js'
</script>

<template>
  <section id="download" class="section">
    <div class="container">
      <div v-reveal>
        <p class="section-eyebrow">Get Started</p>
        <h2 class="section-title">Download &amp; <span class="grad">open source</span></h2>
        <p class="section-lead">
          The dataset and the full augmentation + benchmark codebase are released to
          the community.
        </p>
      </div>

      <div class="dl-grid">
        <a
          v-for="(d, i) in downloads"
          :key="d.title"
          class="dl glass"
          :href="d.href"
          target="_blank"
          rel="noopener"
          v-reveal
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="dl-top">
            <span class="dl-icon">{{ d.icon }}</span>
            <span v-if="d.todo" class="todo">link TODO</span>
          </div>
          <h3>{{ d.title }}</h3>
          <p>{{ d.body }}</p>
          <span class="dl-cta">{{ d.cta }} <span class="arr">→</span></span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dl-grid {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.dl {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, border-color 0.18s ease, opacity 0.6s ease;
}
.dl:hover { transform: translateY(-5px); border-color: var(--accent); }
.dl-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dl-icon { font-size: 2.4rem; }
.todo {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fbbf24;
  border: 1px dashed rgba(251, 191, 36, 0.5);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}
.dl h3 { font-size: 1.3rem; margin: 1rem 0 0.6rem; }
.dl p { color: var(--text-soft); font-size: 0.93rem; flex: 1; }
.dl-cta {
  margin-top: 1rem;
  font-weight: 700;
  color: var(--accent-2);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
.dl:hover .arr { transform: translateX(4px); }
.arr { transition: transform 0.18s ease; }
@media (max-width: 800px) {
  .dl-grid { grid-template-columns: 1fr; }
}
</style>
