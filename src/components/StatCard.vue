<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="stat glass">
    <div class="stat-value">{{ value }}</div>
    <div class="stat-label">{{ label }}</div>
  </div>
</template>

<style scoped>
.stat {
  padding: 1.1rem 1.2rem;
  text-align: center;
  transition: transform 0.18s ease, border-color 0.18s ease;
}
.stat:hover {
  transform: translateY(-3px);
  border-color: var(--border-strong);
}
.stat-value {
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: var(--grad-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat-label {
  margin-top: 0.25rem;
  font-size: 0.82rem;
  color: var(--text-soft);
}
</style>
