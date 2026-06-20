<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { links } from '../data/content.js'

const navItems = [
  { href: '#abstract', label: 'Abstract' },
  { href: '#dataset', label: 'Dataset' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#demo', label: 'Demo' },
  { href: '#benchmark', label: 'Benchmark' },
  { href: '#results', label: 'Results' },
  { href: '#download', label: 'Download' },
]

const open = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}
function close() {
  open.value = false
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="container nav-inner">
      <a href="#top" class="brand" @click="close">
        <span class="brand-mark">🤟</span>
        <span class="brand-name">SignNet-<span class="grad">1M</span></span>
      </a>

      <nav class="links" :class="{ open }">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="close"
        >
          {{ item.label }}
        </a>
        <a
          class="links-cta"
          :href="links.github"
          target="_blank"
          rel="noopener"
          @click="close"
          >GitHub ↗</a
        >
      </nav>

      <button
        class="burger"
        :class="{ open }"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-h);
  z-index: 50;
  transition: background 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: rgba(8, 8, 16, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--border);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}
.brand-mark { font-size: 1.25rem; }
.grad {
  background: var(--grad-text);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.links {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}
.links a {
  font-size: 0.92rem;
  color: var(--text-soft);
  font-weight: 500;
  transition: color 0.15s ease;
}
.links a:hover { color: var(--text); }
.links-cta {
  color: var(--text) !important;
  font-weight: 600 !important;
  border: 1px solid var(--border-strong);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
}
.links-cta:hover { border-color: var(--accent); }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.burger span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 860px) {
  .burger { display: flex; }
  .links {
    position: absolute;
    top: var(--nav-h);
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.2rem;
    padding: 1rem 1.5rem 1.4rem;
    background: rgba(8, 8, 16, 0.96);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--border);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .links.open {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
  .links a { padding: 0.5rem 0; width: 100%; }
  .links-cta { margin-top: 0.5rem; }
}
</style>
