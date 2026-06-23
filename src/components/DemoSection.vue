<script setup>
import { links, sampleFigures } from '../data/content.js'
import { ref } from 'vue'

const poster = 'assets/demo-poster.jpg'
const lightbox = ref(null)
function open(fig) { lightbox.value = fig }
function close() { lightbox.value = null }
</script>

<template>
  <section id="demo" class="section">
    <div class="container">
      <div v-reveal>
        <p class="section-eyebrow">Demo</p>
        <h2 class="section-title">See the augmentations <span class="grad">in motion</span></h2>
        <p class="section-lead">
          Novel viewpoints, swapped backgrounds and identities, and post-rendering
          effects—rendered while preserving the original signing.
        </p>
      </div>

      <figure class="video-wrap glass" v-reveal>
        <video
          :src="links.video"
          controls
          playsinline
          preload="metadata"
          :poster="poster"
        >
          Your browser does not support the video tag.
        </video>
      </figure>

      <div class="gallery">
        <figure
          v-for="(f, i) in sampleFigures"
          :key="f.src"
          class="shot glass"
          v-reveal
          :style="{ transitionDelay: i * 80 + 'ms' }"
          @click="open(f)"
        >
          <img :src="f.src" :alt="f.title" loading="lazy" />
          <figcaption>
            <strong>{{ f.title }}</strong>
            <span>{{ f.caption }}</span>
          </figcaption>
        </figure>
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightbox" class="lightbox" @click="close">
      <img :src="lightbox.src" :alt="lightbox.title" />
      <button class="lightbox-close" aria-label="Close">✕</button>
    </div>
  </section>
</template>

<style scoped>
.video-wrap {
  margin-top: 2.5rem;
  padding: 0.6rem;
  overflow: hidden;
}
.video-wrap video {
  width: 100%;
  display: block;
  border-radius: var(--radius-sm);
  background: #000;
  aspect-ratio: 16 / 9;
  object-fit: contain;
}
.gallery {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.shot {
  overflow: hidden;
  cursor: zoom-in;
  transition: transform 0.18s ease, border-color 0.18s ease, opacity 0.6s ease;
}
.shot:hover { transform: translateY(-4px); border-color: var(--border-strong); }
.shot img {
  width: 100%;
  display: block;
  max-height: 420px;
  object-fit: cover;
  object-position: top;
}
.shot figcaption {
  padding: 1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.shot figcaption strong { font-size: 1rem; }
.shot figcaption span { color: var(--text-soft); font-size: 0.86rem; }

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(4, 4, 9, 0.92);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  cursor: zoom-out;
}
.lightbox img {
  max-width: 95vw;
  max-height: 90vh;
  border-radius: var(--radius-sm);
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.8);
}
.lightbox-close {
  position: absolute;
  top: 1.2rem;
  right: 1.4rem;
  background: var(--surface-2);
  border: 1px solid var(--border-strong);
  color: var(--text);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
}
@media (max-width: 800px) {
  .gallery { grid-template-columns: 1fr; }
}
</style>
