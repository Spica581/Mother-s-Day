// components/FloatingPetals.jsx
// Renders floating emoji particles across the whole screen

import React, { useMemo } from 'react'
import { rand, times } from '../utils/helpers'

const SYMBOLS = ['🌸', '🌺', '💗', '🌷', '💕', '✨', '🌸', '💖', '🌹', '💐', '⭐', '💫']

export default function FloatingPetals({ count = 20, symbols = SYMBOLS }) {
  const petals = useMemo(
    () =>
      times(count, (i) => ({
        id: i,
        symbol:    symbols[i % symbols.length],
        left:      `${rand(2, 98)}%`,
        size:      `${rand(0.9, 2.2)}rem`,
        duration:  `${rand(6, 14)}s`,
        delay:     `${rand(0, 10)}s`,
        opacity:   rand(0.5, 0.9),
      })),
    [count, symbols]
  )

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal select-none"
          style={{
            left:       p.left,
            bottom:     '-2rem',
            fontSize:   p.size,
            '--duration': p.duration,
            '--delay':    p.delay,
            opacity:    0,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}
