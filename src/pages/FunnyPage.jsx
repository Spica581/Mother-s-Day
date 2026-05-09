// pages/FunnyPage.jsx
// Playful page with funny moments and interactive animations

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingPetals from '../components/FloatingPetals'
import { fireConfetti } from '../utils/helpers'

// ── Edit these moments to personalize ──────────────
const FUNNY_MOMENTS = [
  {
    emoji:  '😂',
    moment: 'The "Paano ito?" Moment',
    story:  'Naalala ko lagi kang nagpapatulong sa akin pag related sa phone or sa laptop"',
    color:  '#FFF9C4',
    label:  'Classic Mom Help',
  },
  {
    emoji:  '🍳',
    moment: 'The Experimental Recipe',
    story:  'Namimiss ko pa rin mga binabake niyo po kaya ako na mismo nagbabake kasi doon ko po naalala mga gawa niyo po',
    color:  '#FFE0B2',
    label:  'Chef\'s Kiss? 🤔',
  },
  {
    emoji:  '📱',
    moment: 'Audtioning and acting',
    story:  '"Ever since na nasa Manila ako, ang nostalgic ng mga lugar na dati po nating pinupuntahan nung lagi po tayong bumibyahe papuntang Manila',
    color:  '#E8F5E9',
    label:  'Child Star In The Making',
  },
  {
    emoji:  '😴',
    moment: 'The 5-Minute Nap',
    story:  'Namimiss ko yung times na pag natutulog sa car, nabubuhat ako sa bed natin',
    color:  '#E3F2FD',
    label:  'Car Trips',
  },
  {
    emoji:  '🛍️',
    moment: 'The Grocery Store And Malls',
    story:  '"We\'ll only be 5 minutes!" — 2 hours later, still comparing towels. Time works differently in a store with Mom.',
    color:  '#FCE4EC',
    label:  'Time Traveler 🕐',
  },
  {
    emoji:  '🤫',
    moment: '"Wag mong sabihin sa daddy mo"',
    story:  'Natutuwa po ako sa mga times na kumakain tayo sa labas bago mag dinner para di alam ni daddy',
    color:  '#F3E5F5',
    label:  'Secret Agent 🕵️',
  },
]

function FunnyCard({ item, index }) {
  const [revealed, setRevealed] = useState(false)
  const [bouncing, setBouncing] = useState(false)

  const handleClick = () => {
    setRevealed(!revealed)
    setBouncing(true)
    setTimeout(() => setBouncing(false), 600)
    if (!revealed) fireConfetti({ x: Math.random() * 0.8 + 0.1, y: 0.7 }, ['#FFD700','#FF6B9D','#98FB98','#87CEEB'])
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, type: 'spring', stiffness: 120 }}
      whileHover={{ rotate: index % 2 === 0 ? -2 : 2, scale: 1.03 }}
      className="cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="rounded-3xl p-6 border border-white/70 shadow-md overflow-hidden relative"
        style={{ backgroundColor: item.color }}
      >
        {/* Sparkle decoration */}
        <span className="absolute top-3 right-3 text-lg opacity-40">✨</span>

        <motion.div
          animate={bouncing ? { y: [-10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="text-5xl block mb-4">{item.emoji}</span>
        </motion.div>

        <div className="inline-block px-3 py-1 rounded-full text-xs font-body font-medium bg-white/50 text-plum/70 mb-3">
          {item.label}
        </div>

        <h3 className="font-display text-lg font-semibold text-plum mb-2">{item.moment}</h3>

        <AnimatePresence>
          {revealed ? (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="font-body text-plum/75 text-sm leading-relaxed overflow-hidden"
            >
              {item.story}
            </motion.p>
          ) : (
            <p className="font-body text-plum/40 text-xs italic">tap to remember 😄</p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function FunnyPage({ onNext, onPrev }) {
  const [easterFound, setEasterFound] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleTitleClick = () => {
    const next = clickCount + 1
    setClickCount(next)
    if (next >= 5 && !easterFound) {
      setEasterFound(true)
      fireConfetti({ x: 0.5, y: 0.3 })
    }
  }

  return (
    <div
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #FFFDE7 0%, #FFF9F0 50%, #FFF0F5 100%)' }}
    >
      <FloatingPetals count={10} symbols={['😄','😂','🎉','✨','💫','🌟']} />

      {/* Header */}
      <div className="relative z-10 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-rose text-2xl mb-2">because laughter is love too</p>
          <h2
            className="font-display text-4xl md:text-6xl font-light text-plum mb-4 cursor-default select-none"
            onClick={handleTitleClick}
          >
            Our Funny Moments 😄
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)' }} />
          <p className="font-body text-mauve/60 mt-4 text-sm">
            Tap each card to relive the memory
          </p>
        </motion.div>

        {/* Easter egg reveal */}
        <AnimatePresence>
          {easterFound && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="mt-4 inline-block glass rounded-2xl px-6 py-3"
            >
              <p className="font-body text-rose text-sm">
                🌟 Easter egg found! You clicked 5 times — just like Mom clicks the TV remote when it's "not working" 😂
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Funny cards */}
      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {FUNNY_MOMENTS.map((item, i) => (
          <FunnyCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* Fun stat */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-14"
      >
        <div className="glass rounded-3xl px-8 py-6 max-w-md mx-auto">
          <p className="font-display text-2xl text-plum mb-1">
            Approximate number of times you've made me laugh:
          </p>
          <p className="font-display text-5xl font-bold text-rose">∞</p>
          <p className="font-body text-mauve/60 text-sm mt-1">and counting 💕</p>
        </div>
      </motion.div>

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
