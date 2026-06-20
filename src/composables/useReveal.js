// Tiny scroll-reveal directive (no external deps).
// Usage: <section v-reveal> ... </section>
// Adds the `is-visible` class the first time the element enters the viewport.
// Respects prefers-reduced-motion: if the user prefers reduced motion, the
// element is shown immediately without any transition.

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let observer = null

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )
  return observer
}

export const reveal = {
  mounted(el) {
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    if (observer) observer.unobserve(el)
  },
}
