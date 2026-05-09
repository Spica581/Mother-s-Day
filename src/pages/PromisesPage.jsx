// pages/PromisesPage.jsx
// Promise cards with glowing animations and warm hopeful atmosphere

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingPetals from '../components/FloatingPetals'

// ── Edit these promises to personalize ─────────────
const PROMISES = [
  {
    icon:    '📞',
    promise: 'I Promise to Call More',
    detail:  'Not just on special days. Just to hear your voice, share a laugh, or tell you about my day.',
    color:   '#FF6B9D',
  },
  {
    icon:    '🏠',
    promise: 'I Promise to Be More Responsible',
    detail:  'No matter how far I am from you, I will make decisions what are responsible.',
    color:   '#F4A261',
  },
  {
    icon:    '👂',
    promise: 'I Promise to Listen More',
    detail:  'To your stories, your worries, your wisdom, your bilins, your pagsabihans. You have my full, undivided attention.',
    color:   '#9B8EC4',
  },
  {
    icon:    '💪',
    promise: 'I Promise to Make You Proud',
    detail:  'Every step forward I take, I carry you with me. You believing in me is what drives me.',
    color:   '#2ECC71',
  },
  {
    icon:    '🌟',
    promise: 'I Promise to Honor You',
    detail:  'To live in a way that reflects the values, love, and strength you poured into raising me.',
    color:   '#F1C40F',
  },
  {
    icon:    '❤️',
    promise: 'I Promise to Love You Forever',
    detail:  'No lifetime is long enough to repay what you\'ve given me. But I\'ll spend mine trying.',
    color:   '#E74C3C',
  },
]

function PromiseCard({ promise, index }) {
  const [hover, setHover] = useState(false)
  const [sealed, setSealed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative cursor-pointer"
      onClick={() => setSealed(!sealed)}
    >
      <motion.div
        animate={{
          boxShadow: hover || sealed
            ? `0 20px 60px ${promise.color}50, 0 8px 24px ${promise.color}30`
            : `0 4px 20px ${promise.color}20`,
        }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl p-6 bg-white/80 border border-white relative overflow-hidden"
      >
        {/* Glow background */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0"
          animate={{ opacity: hover || sealed ? 0.08 : 0 }}
          style={{ background: promise.color }}
          transition={{ duration: 0.3 }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${promise.color}, transparent)`,
            opacity: hover || sealed ? 1 : 0.3,
            transition: 'opacity 0.3s',
          }}
        />

        <div className="relative z-10">
          <motion.span
            animate={hover ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl block mb-4"
          >
            {promise.icon}
          </motion.span>

          <h3
            className="font-display text-xl font-semibold mb-2 transition-colors duration-300"
            style={{ color: hover || sealed ? promise.color : '#4A2C3D' }}
          >
            {promise.promise}
          </h3>

          <p className="font-body text-plum/65 text-sm leading-relaxed mb-4">
            {promise.detail}
          </p>

          {/* Seal button */}
          <motion.div
            animate={sealed ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300"
              style={{
                borderColor:     sealed ? promise.color : '#FFB6C1',
                backgroundColor: sealed ? promise.color : 'transparent',
              }}
            >
              {sealed && <span className="text-white text-xs">✓</span>}
            </div>
            <span className="font-body text-xs text-mauve/60">
              {sealed ? 'Promise sealed ✦' : 'tap to seal this promise'}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PromisesPage({ onNext, onPrev }) {
  const [allSealed, setAllSealed] = useState(false)
  const [sealCount, setSealCount] = useState(0)

  return (
    <div
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFF8F0 0%, #FFF0F5 50%, #F0F4FF 100%)' }}
    >
      <FloatingPetals count={15} symbols={['⭐','💫','✨','🌟','💕','🌸']} />

      {/* Background orb */}
      <div className="orb w-[600px] h-[600px] bottom-0 right-0 opacity-20"
           style={{ background: 'radial-gradient(circle, rgba(244,195,161,0.5) 0%, transparent 70%)' }} />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-rose text-2xl mb-2 text-glow">made with love and meant forever</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-plum mb-4">
            My Promises to You
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)' }} />
          <p className="font-body text-mauve/60 mt-4 text-sm">Tap each card to seal a promise 💕</p>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {PROMISES.map((p, i) => (
          <PromiseCard key={i} promise={p} index={i} />
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
          Final Chapter →
        </button>
      </div>
    </div>
  )
}
