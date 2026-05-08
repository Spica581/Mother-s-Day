// pages/WelcomePage.jsx
// Fullscreen hero — animated title, floating petals, CTA button

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'
import FloatingPetals from '../components/FloatingPetals'

const LINE1 = 'Happy Mother\'s Day, Mom'
const LINE2 = 'I made something special — just for you.'

export default function WelcomePage({ onNext }) {
  const { displayed: title, done: titleDone } = useTypewriter(LINE1, 70, 800)
  const { displayed: sub }                    = useTypewriter(LINE2, 45, titleDone ? 400 : 99999)
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    if (titleDone) setTimeout(() => setShowBtn(true), LINE2.length * 45 + 600)
  }, [titleDone])

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF0F5 0%, #FFE4EF 40%, #FFD6E8 100%)',
      }}
    >
      {/* Background orbs */}
      <div className="orb w-[500px] h-[500px] -top-32 -left-32 opacity-60"
           style={{ background: 'radial-gradient(circle, rgba(255,182,193,0.45) 0%, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] bottom-0 right-0 opacity-50"
           style={{ background: 'radial-gradient(circle, rgba(244,195,161,0.35) 0%, transparent 70%)' }} />
      <div className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
           style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.2) 0%, transparent 70%)' }} />

      <FloatingPetals count={25} />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-script text-rose text-2xl md:text-3xl mb-4 text-glow"
        >
          A love letter to my favorite person
        </motion.div>

        {/* Main heading — typewriter */}
        <h1
          className="font-display font-light text-4xl md:text-6xl lg:text-7xl text-plum leading-tight mb-6 typewriter-cursor"
          style={{ minHeight: '1.4em' }}
        >
          {title}
          <span className="text-rose"> ❤️</span>
        </h1>

        {/* Subtitle — typewriter (starts after title) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: titleDone ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-mauve text-lg md:text-xl font-light tracking-wide mb-14"
          style={{ minHeight: '1.6em' }}
        >
          {sub}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: showBtn ? 1 : 0, scale: showBtn ? 1 : 0.8, y: showBtn ? 0 : 20 }}
          transition={{ type: 'spring', stiffness: 180, damping: 14 }}
        >
          <button onClick={onNext} className="btn-primary text-base md:text-lg group">
            <span className="relative z-10 flex items-center gap-2">
              Start the Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </span>
          </button>
        </motion.div>

        {/* Subtle scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showBtn ? 0.4 : 0 }}
          transition={{ delay: 1 }}
          className="font-body text-xs text-mauve mt-8 tracking-[0.2em] uppercase"
        >
          7 chapters of love await
        </motion.p>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)' }}
      />

      {/* Easter egg — hidden in corner */}
      <div
        className="easter-egg absolute bottom-6 left-6 text-xs text-petal/30 select-none"
        title="You found a secret! 🌟"
        onClick={() => {
          alert('✨ Secret found! Just like Mom finds joy in every little thing. 💕')
        }}
      >
        ✦
      </div>
    </div>
  )
}
