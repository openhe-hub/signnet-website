<script setup>
import { downloads, releasePlan } from '../data/content.js'
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
          </div>
          <h3>{{ d.title }}</h3>
          <p>{{ d.body }}</p>
          <span class="dl-cta">{{ d.cta }} <span class="arr">→</span></span>
        </a>
      </div>

      <div class="roadmap glass" v-reveal>
        <div class="roadmap-head">
          <p class="section-eyebrow">Release Plan</p>
          <h3>Open-source roadmap</h3>
        </div>

        <ol class="timeline">
          <li
            v-for="(item, i) in releasePlan"
            :key="item.date"
            class="timeline-item"
            :style="{ transitionDelay: i * 80 + 'ms' }"
          >
            <div class="time-dot"></div>
            <div class="time-date mono">{{ item.date }}</div>
            <div class="time-body">
              <h4>{{ item.title }}</h4>
              <p>{{ item.body }}</p>
            </div>
          </li>
        </ol>
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

.roadmap {
  margin-top: 1.5rem;
  padding: 1.6rem;
  display: grid;
  grid-template-columns: minmax(180px, 0.35fr) 1fr;
  gap: 1.5rem;
}
.roadmap-head .section-eyebrow {
  margin-bottom: 0.45rem;
}
.roadmap h3 {
  font-size: 1.25rem;
}
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.timeline::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 0.4rem;
  bottom: 0.45rem;
  width: 1px;
  background: linear-gradient(180deg, var(--accent-2), var(--accent), var(--accent-3));
  opacity: 0.55;
}
.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  padding: 0 0 1.15rem 1.7rem;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.time-dot {
  position: absolute;
  left: 0;
  top: 0.42rem;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--grad);
  box-shadow: 0 0 0 5px rgba(139, 92, 246, 0.14);
}
.time-date {
  color: var(--accent-2);
  font-size: 0.88rem;
  font-weight: 800;
  white-space: nowrap;
}
.time-body h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.time-body p {
  margin: 0;
  color: var(--text-soft);
  font-size: 0.92rem;
}
@media (max-width: 800px) {
  .dl-grid { grid-template-columns: 1fr; }
  .roadmap {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
