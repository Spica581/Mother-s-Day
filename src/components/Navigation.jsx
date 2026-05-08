// components/Navigation.jsx
// Floating dot navigation on the right side + mobile hamburger top nav

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PAGES = [
  { id: 0, label: 'Welcome',   emoji: '🌸' },
  { id: 1, label: 'Reasons',   emoji: '💕' },
  { id: 2, label: 'Memories',  emoji: '📷' },
  { id: 3, label: 'Funny',     emoji: '😄' },
  { id: 4, label: 'Thank You', emoji: '🙏' },
  { id: 5, label: 'Promises',  emoji: '⭐' },
  { id: 6, label: 'Forever',   emoji: '💖' },
]

export default function Navigation({ currentPage, onNavigate, total }) {
  const [hoveredId, setHoveredId] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* ── Desktop dot nav (right side) ── */}
      <nav
        aria-label="Page navigation"
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
      >
        {PAGES.map((p) => (
          <div
            key={p.id}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHoveredId(p.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Tooltip label */}
            <AnimatePresence>
              {hoveredId === p.id && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-8 glass rounded-full px-3 py-1 text-xs font-body text-plum whitespace-nowrap shadow-md"
                >
                  {p.emoji} {p.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <button
              onClick={() => onNavigate(p.id)}
              aria-label={`Go to ${p.label}`}
              className="w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 focus:outline-none"
              style={{
                borderColor:     currentPage === p.id ? '#FF6B9D' : '#FFB6C1',
                backgroundColor: currentPage === p.id ? '#FF6B9D' : 'transparent',
                transform:       currentPage === p.id ? 'scale(1.4)' : 'scale(1)',
                boxShadow:       currentPage === p.id ? '0 0 10px rgba(255,107,157,0.6)' : 'none',
              }}
            />
          </div>
        ))}
      </nav>

      {/* ── Mobile hamburger ── */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="glass rounded-full w-11 h-11 flex items-center justify-center shadow-md"
          aria-label="Menu"
        >
          <span className="text-lg">{mobileOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 right-4 z-50 glass rounded-2xl shadow-xl p-4 md:hidden min-w-[160px]"
          >
            {PAGES.map((p) => (
              <button
                key={p.id}
                onClick={() => { onNavigate(p.id); setMobileOpen(false) }}
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-xl text-sm font-body transition-all ${
                  currentPage === p.id
                    ? 'bg-rose/20 text-rose font-medium'
                    : 'text-plum hover:bg-petal/30'
                }`}
              >
                <span>{p.emoji}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page counter - bottom left */}
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 0.55, y: 0 }}
        className="fixed bottom-5 left-5 z-50 font-body text-xs text-mauve tracking-widest hidden md:block"
      >
        {String(currentPage + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </motion.div>
    </>
  )
}
