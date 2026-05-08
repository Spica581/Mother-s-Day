// utils/helpers.js — Shared utility functions

/**
 * Fires a canvas-confetti burst from a given origin.
 * Requires canvas-confetti npm package.
 */
export async function fireConfetti(origin = { x: 0.5, y: 0.6 }, colors = ['#FF6B9D','#FFB6C1','#FF8FAB','#FFF0F5','#F4C3A1']) {
  try {
    const confetti = (await import('canvas-confetti')).default
    confetti({
      particleCount: 120,
      spread: 90,
      origin,
      colors,
      shapes: ['circle', 'square'],
      scalar: 1.1,
    })
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    })
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    })
  } catch (e) {
    console.warn('Confetti unavailable', e)
  }
}

/** Returns a random number between min and max */
export const rand = (min, max) => Math.random() * (max - min) + min

/** Clamps a value between min and max */
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

/** Generates an array of length n filled by a factory fn */
export const times = (n, fn) => Array.from({ length: n }, (_, i) => fn(i))

/** Pick a random item from an array */
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]

/** Delay for ms milliseconds */
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
