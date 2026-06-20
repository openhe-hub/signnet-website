<script setup>
import { abstract, contributions } from '../data/content.js'
</script>

<template>
  <section id="abstract" class="section">
    <div class="container">
      <div v-reveal>
        <p class="section-eyebrow">Overview</p>
        <h2 class="section-title">Robust sign language at <span class="grad">scale</span></h2>
        <p class="abstract">{{ abstract }}</p>
      </div>

      <div class="contrib-grid">
        <article
          v-for="(c, i) in contributions"
          :key="c.title"
          class="contrib glass"
          v-reveal
          :style="{ transitionDelay: i * 80 + 'ms' }"
        >
          <div class="contrib-icon">{{ c.icon }}</div>
          <h3>{{ c.title }}</h3>
          <p>{{ c.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.abstract {
  max-width: 52rem;
  color: var(--text-soft);
  font-size: 1.06rem;
  margin-top: 1rem;
}
.contrib-grid {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.1rem;
}
.contrib {
  padding: 1.6rem;
  transition: transform 0.18s ease, border-color 0.18s ease, opacity 0.6s ease;
}
.contrib:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
}
.contrib-icon {
  font-size: 1.8rem;
  margin-bottom: 0.6rem;
}
.contrib h3 {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}
.contrib p {
  color: var(--text-soft);
  font-size: 0.95rem;
  margin: 0;
}
@media (max-width: 800px) {
  .contrib-grid { grid-template-columns: 1fr; }
}
</style>
