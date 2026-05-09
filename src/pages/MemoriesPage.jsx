// pages/MemoriesPage.jsx
// Scrapbook / timeline layout with memory cards and captions

import React from 'react'
import { motion } from 'framer-motion'
import FloatingPetals from '../components/FloatingPetals'

// ── Edit these memories to personalize ─────────────
const MEMORIES = [
  {
    year:    'Early Years',
    emoji:   '👶',
    title:   'The Warmth of Your Arms',
    caption: 'My very first memory is the sound of your heartbeat. Safe. Loved. Home.',
    color:   '#FFE4EF',
    border:  '#FF8FAB',
    pos:     'left',
  },
  {
    year:    'Childhood',
    emoji:   '🎂',
    title:   'Birthday Mornings',
    caption: 'You always made birthdays feel like the most happiest day in the universe. Every year, you make it feel special',
    color:   '#FFF0DC',
    border:  '#F4C3A1',
    pos:     'right',
  },
  {
    year:    'School Days',
    emoji:   '📖',
    title:   'Homework at the Kitchen Table',
    caption: 'Late nights over homework, and you\'d sit beside me even when you were exhausted from work and continue teaching me when lessons are hard.',
    color:   '#E8F4FF',
    border:  '#93C5FD',
    pos:     'left',
  },
  {
    year:    'Growing Up',
    emoji:   '🌻',
    title:   'The Talks That Changed Me',
    caption: 'You gave me wisdom I still carry today. Life advice wrapped in love and patience.',
    color:   '#FFFDE7',
    border:  '#FDE68A',
    pos:     'right',
  },
  {
    year:    'Hard Times',
    emoji:   '🌧️',
    title:   'You Were There on the Dark Days',
    caption: 'When everything fell apart, you quietly rebuilt my world without me even knowing.',
    color:   '#F3E8FF',
    border:  '#C084FC',
    pos:     'left',
  },
  {
    year:    'Today',
    emoji:   '💐',
    title:   'Every Call, Every Message',
    caption: 'Your voice on the phone is still the most comforting sound in my world. Always.',
    color:   '#FFE4EF',
    border:  '#FF6B9D',
    pos:     'right',
  },
]

function MemoryCard({ memory, index }) {
  const isLeft = memory.pos === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 80 }}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-10 md:mb-14`}
    >
      {/* Card */}
      <div className="flex-1 max-w-md">
        <div
          className="rounded-3xl p-6 md:p-8 shadow-lg border relative overflow-hidden card-hover"
          style={{
            backgroundColor: memory.color,
            borderColor: memory.border + '60',
          }}
        >
          {/* Subtle pattern */}
          <div
            className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20"
            style={{ background: memory.border }}
          />

          <div className="relative z-10">
            <span className="text-4xl mb-3 block animate-float">{memory.emoji}</span>
            <p
              className="font-body text-xs font-medium tracking-[0.2em] uppercase mb-1"
              style={{ color: memory.border }}
            >
              {memory.year}
            </p>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-plum mb-3">
              {memory.title}
            </h3>
            <p className="font-body text-plum/70 text-sm leading-relaxed">
              {memory.caption}
            </p>
          </div>
        </div>
      </div>

      {/* Center dot on desktop */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <div
          className="w-4 h-4 rounded-full border-2 shadow-md"
          style={{
            borderColor:     memory.border,
            backgroundColor: memory.color,
            boxShadow:       `0 0 12px ${memory.border}80`,
          }}
        />
      </div>

      {/* Spacer on opposite side */}
      <div className="flex-1 max-w-md hidden md:block" />
    </motion.div>
  )
}

export default function MemoriesPage({ onNext, onPrev }) {
  return (
    <div
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFF8F0 0%, #FFF0F5 50%, #F5F0FF 100%)' }}
    >
      <FloatingPetals count={12} symbols={['📷','🌸','💕','⭐','🌷']} />

      {/* Header */}
      <div className="relative z-10 text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-rose text-2xl mb-2 text-glow">a scrapbook of us</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-plum mb-4">
            Our Favorite Memories
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)' }} />
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Center line - desktop only */}
        <div
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5"
          style={{ background: 'linear-gradient(180deg, transparent, #FFB6C1 10%, #FFB6C1 90%, transparent)' }}
        />

        {MEMORIES.map((m, i) => (
          <MemoryCard key={i} memory={m} index={i} />
        ))}
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-center gap-4 mt-8">
        <button
          onClick={onPrev}
          className="px-6 py-3 rounded-full font-body text-sm text-mauve border border-petal hover:bg-petal/30 transition-all"
        >
          ← Back
        </button>
        <button onClick={onNext} className="btn-primary text-sm">
          Next Chapter →
        </button>
      </div>
    </div>
  )
}
