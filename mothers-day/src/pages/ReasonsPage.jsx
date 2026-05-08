// pages/ReasonsPage.jsx
// Animated cards — each card reveals a loving reason

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FloatingPetals from '../components/FloatingPetals'
import { fireConfetti } from '../utils/helpers'

// ── Edit these reasons to personalize ──────────────
const REASONS = [
  {
    emoji: '🤗',
    title: 'Your Hugs Heal Everything',
    body:  'No matter how hard the day was, one hug from you made the whole world feel safe again.',
    color: 'from-rose-100 to-pink-50',
    glow:  'rgba(255,107,157,0.25)',
  },
  {
    emoji: '🍳',
    title: 'You Cook With Love',
    body:  'Every meal you made was seasoned with care. I could taste the love in every single bite.',
    color: 'from-orange-50 to-amber-50',
    glow:  'rgba(244,195,161,0.35)',
  },
  {
    emoji: '🌙',
    title: 'You Never Gave Up on Me',
    body:  'Even when I made mistakes, you believed in me when I couldn\'t believe in myself.',
    color: 'from-purple-50 to-pink-50',
    glow:  'rgba(196,160,219,0.3)',
  },
  {
    emoji: '📚',
    title: 'You Taught Me Everything',
    body:  'From tying my shoes to facing the world — every lesson I know, I learned from watching you.',
    color: 'from-blue-50 to-indigo-50',
    glow:  'rgba(129,161,216,0.3)',
  },
  {
    emoji: '😊',
    title: 'Your Smile Is My Sunshine',
    body:  'Your laugh is the most beautiful sound I\'ve ever heard. It makes any room brighter.',
    color: 'from-yellow-50 to-orange-50',
    glow:  'rgba(253,224,71,0.3)',
  },
  {
    emoji: '🛡️',
    title: 'You Always Protected Me',
    body:  'You stood between me and every fear, every bully, every dark night. My guardian angel.',
    color: 'from-green-50 to-teal-50',
    glow:  'rgba(52,211,153,0.25)',
  },
  {
    emoji: '💪',
    title: 'You Are My Role Model',
    body:  'Your strength, grace, and resilience showed me what it means to be a real hero.',
    color: 'from-pink-50 to-rose-50',
    glow:  'rgba(255,107,157,0.2)',
  },
  {
    emoji: '🌺',
    title: 'You Made Home Feel Like Home',
    body:  'Wherever you are, that\'s home. You turned four walls into a sanctuary of love.',
    color: 'from-red-50 to-pink-50',
    glow:  'rgba(248,113,113,0.2)',
  },
]

function ReasonCard({ reason, index }) {
  const [flipped, setFlipped] = useState(false)
  const [popped,  setPopped]  = useState(false)

  const handleClick = () => {
    setFlipped(!flipped)
    if (!popped) {
      setPopped(true)
      fireConfetti({ x: Math.random(), y: 0.6 })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, type: 'spring', stiffness: 100 }}
      className="relative cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative w-full"
        style={{ transformStyle: 'preserve-3d', minHeight: '220px' }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${reason.color} border border-white/60 shadow-lg card-hover`}
          style={{
            backfaceVisibility: 'hidden',
            boxShadow: `0 8px 32px ${reason.glow}, 0 2px 8px rgba(0,0,0,0.05)`,
          }}
        >
          <span className="text-5xl mb-4 animate-float">{reason.emoji}</span>
          <h3 className="font-display text-xl font-semibold text-plum mb-2">{reason.title}</h3>
          <p className="text-xs text-mauve/70 font-body tracking-wider">tap to read ✦</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${reason.color} border border-white/60 shadow-lg`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: `0 8px 32px ${reason.glow}, 0 2px 8px rgba(0,0,0,0.05)`,
          }}
        >
          <span className="text-3xl mb-3">{reason.emoji}</span>
          <p className="font-body text-plum/80 text-sm leading-relaxed">{reason.body}</p>
          <div className="mt-4 w-8 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #FF6B9D, #FFB6C1)' }} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ReasonsPage({ onNext, onPrev }) {
  return (
    <div
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF0F5 0%, #FFF8F0 60%, #FFF0F5 100%)' }}
    >
      <FloatingPetals count={15} symbols={['💕','💗','💖','✨','🌸']} />

      {/* Background orb */}
      <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
           style={{ background: 'radial-gradient(circle, rgba(255,182,193,0.4) 0%, transparent 70%)' }} />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-rose text-2xl mb-2 text-glow">from the bottom of my heart</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-plum mb-4">
            Why I Love You
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)' }} />
          <p className="font-body text-mauve/70 mt-4 text-sm tracking-wider">
            Tap each card to reveal a reason 💕
          </p>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {REASONS.map((r, i) => (
          <ReasonCard key={i} reason={r} index={i} />
        ))}
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-center gap-4">
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
