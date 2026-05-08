// pages/ThankYouPage.jsx
// Emotional, cinematic thank you section with typewriter text

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import { fireConfetti } from '../utils/helpers'
import FloatingPetals from '../components/FloatingPetals'

const THANK_YOU_LINES = [
  'For every sacrifice you made that I only understand now.',
  'For the sleepless nights watching over me.',
  'For every prayer you whispered when you thought I couldn\'t hear.',
  'For always believing in me — more than I believed in myself.',
  'For every "I love you" — spoken and unspoken.',
  'For being the reason I know what real love looks like.',
  'For making me who I am today.',
  'Thank you, Mom.',
]

function ThankYouLine({ text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="flex items-start gap-4 mb-5"
    >
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
        className="text-rose text-lg mt-1 flex-shrink-0"
      >
        ✦
      </motion.span>
      <p className={`font-display font-light text-plum/85 leading-relaxed ${
        text === 'Thank you, Mom.'
          ? 'text-3xl md:text-4xl font-normal text-rose text-glow'
          : 'text-xl md:text-2xl'
      }`}>
        {text}
      </p>
    </motion.div>
  )
}

export default function ThankYouPage({ onNext, onPrev }) {
  const [heartClicked, setHeartClicked] = useState(false)

  const handleHeartClick = () => {
    setHeartClicked(true)
    fireConfetti({ x: 0.5, y: 0.5 }, ['#FF6B9D','#FFB6C1','#FF8FAB','#FFDEE9'])
    setTimeout(() => setHeartClicked(false), 3000)
  }

  return (
    <div
      className="relative min-h-screen py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #4A2C3D 0%, #6B3D52 30%, #8B4D6A 60%, #FF8FAB 100%)',
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      <FloatingPetals count={20} symbols={['💗','✨','🌸','💖','⭐','💕']} />

      {/* Glowing orbs */}
      <div className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20"
           style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.5) 0%, transparent 70%)' }} />
      <div className="orb w-96 h-96 -top-20 -right-20 opacity-15"
           style={{ background: 'radial-gradient(circle, rgba(255,182,193,0.4) 0%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <p className="font-script text-petal/80 text-3xl mb-3">with all my heart</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-white mb-4">
            Thank You
          </h2>
          <div className="w-24 h-0.5 mx-auto" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,182,193,0.7), transparent)' }} />
        </motion.div>

        {/* Thank you lines */}
        <div className="mb-16">
          {THANK_YOU_LINES.map((line, i) => (
            <ThankYouLine key={i} text={line} index={i} />
          ))}
        </div>

        {/* Interactive heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="font-body text-petal/60 text-sm mb-4 tracking-wider">
            Press the heart to send your love
          </p>
          <motion.button
            onClick={handleHeartClick}
            animate={heartClicked
              ? { scale: [1, 1.4, 0.9, 1.2, 1], rotate: [0, -10, 10, -5, 0] }
              : { scale: 1 }
            }
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="text-7xl md:text-8xl cursor-pointer select-none"
            aria-label="Send love"
          >
            💖
          </motion.button>

          <AnimatePresence>
            {heartClicked && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="font-script text-petal text-2xl mt-4 text-glow"
              >
                Sending all my love to you, Mom 💕
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-dark rounded-3xl p-8 text-center mb-14 border border-petal/20"
        >
          <p className="font-display text-2xl md:text-3xl text-white/90 font-light italic leading-relaxed">
            "A mother's love is the fuel that enables a normal human being to do the impossible."
          </p>
          <p className="font-body text-petal/50 text-sm mt-3 tracking-wider">— Marion C. Garretty</p>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-center gap-4">
        <button
          onClick={onPrev}
          className="px-6 py-3 rounded-full font-body text-sm text-petal/70 border border-petal/30 hover:bg-petal/10 transition-all"
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
