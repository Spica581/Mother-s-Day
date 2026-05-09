// pages/FinalPage.jsx
// Cinematic, emotional final page with fade-in reveal and particle hearts

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fireConfetti, rand, times } from '../utils/helpers'

// Generates random heart/sparkle particles
function HeartParticle({ id }) {
  const style = {
    position: 'fixed',
    left:     `${rand(0, 100)}%`,
    bottom:   '-2rem',
    fontSize: `${rand(0.8, 2.5)}rem`,
    animationDuration: `${rand(5, 12)}s`,
    animationDelay:    `${rand(0, 8)}s`,
    animation: `rise ${rand(5, 12)}s ease-in ${rand(0, 8)}s infinite`,
    pointerEvents: 'none',
    userSelect: 'none',
    opacity: 0,
    zIndex: 1,
  }
  const symbols = ['💗','💖','💕','✨','🌸','💫','⭐','🌷','🌺','💝']
  return (
    <span key={id} style={style} aria-hidden="true">
      {symbols[id % symbols.length]}
    </span>
  )
}

export default function FinalPage({ onRestart, onPrev }) {
  const [phase, setPhase] = useState(0) // 0=dark, 1=line1, 2=line2, 3=line3, 4=full
  const [confettiFired, setConfettiFired] = useState(false)
  const particles = useRef(times(40, (i) => i))

  useEffect(() => {
    // Cinematic sequence
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 3000),
      setTimeout(() => setPhase(3), 5200),
      setTimeout(() => setPhase(4), 7000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (phase === 4 && !confettiFired) {
      setConfettiFired(true)
      fireConfetti({ x: 0.5, y: 0.5 })
      setTimeout(() => fireConfetti({ x: 0.2, y: 0.7 }), 600)
      setTimeout(() => fireConfetti({ x: 0.8, y: 0.7 }), 1200)
    }
  }, [phase, confettiFired])

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: phase < 1
          ? '#000000'
          : `linear-gradient(160deg, #1a0810 0%, #2d1020 30%, #4A2C3D 60%, #7B3D5A 85%, #FF6B9D 100%)`,
        transition: 'background 2s ease',
      }}
    >
      {/* Floating particles — appear at phase 4 */}
      {phase >= 3 && particles.current.map((id) => (
        <HeartParticle key={id} id={id} />
      ))}

      {/* Glowing orbs */}
      {phase >= 2 && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 2 }}
            className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'radial-gradient(circle, rgba(255,107,157,0.5) 0%, transparent 70%)' }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="orb w-80 h-80 top-10 left-10"
            style={{ background: 'radial-gradient(circle, rgba(244,195,161,0.4) 0%, transparent 70%)' }}
          />
        </>
      )}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

        {/* Line 1 */}
        <AnimatePresence>
          {phase >= 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5, ease: 'easeIn' }}
              className="font-display text-xl md:text-2xl font-light text-white/50 tracking-[0.25em] uppercase mb-12"
            >
              In every lifetime
            </motion.p>
          )}
        </AnimatePresence>

        {/* Line 2 — main statement */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="font-display font-light text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-10"
            >
              I'd still choose you
              <br />
              <span className="text-rose font-normal" style={{ textShadow: '0 0 30px rgba(255,107,157,0.7)' }}>
                as my Mommy.
              </span>
            </motion.h1>
          )}
        </AnimatePresence>

        {/* Divider */}
        {phase >= 3 && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            className="w-32 h-0.5 mx-auto mb-10"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,107,157,0.7), transparent)' }}
          />
        )}

        {/* Line 3 — final declaration */}
        <AnimatePresence>
          {phase >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            >
              <p className="font-script text-4xl md:text-5xl mb-2"
                 style={{ color: '#FF8FAB', textShadow: '0 0 30px rgba(255,107,157,0.5)' }}>
                I love you forever
              </p>
              <p className="text-4xl md:text-5xl animate-heartbeat">❤️</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full reveal — restart / signature */}
        <AnimatePresence>
          {phase >= 4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mt-16"
            >
              <p className="font-body text-white/40 text-sm tracking-[0.3em] uppercase mb-8">
                Made with love — Happy Mother's Day
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onRestart}
                  className="px-8 py-3 rounded-full font-body text-sm border border-petal/30 text-petal/70 hover:bg-petal/10 transition-all"
                >
                  ↺ Replay from Start
                </button>
                <button
                  onClick={onPrev}
                  className="px-8 py-3 rounded-full font-body text-sm border border-rose/30 text-rose/70 hover:bg-rose/10 transition-all"
                >
                  ← Go Back
                </button>
              </div>

              {/* Signature */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2 }}
                className="font-script text-xl text-petal/50 mt-10"
              >
                With all my love ✦
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
           }} />
    </div>
  )
}
