// components/LoadingScreen.jsx
// Full-screen loading overlay shown on first visit

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase]       = useState('loading') // loading | reveal | done

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setPhase('reveal'), 200)
          setTimeout(() => {
            setPhase('done')
            onComplete()
          }, 1800)
          return 100
        }
        return p + Math.random() * 12
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #FFF0F5 0%, #FFE4F0 40%, #FFDEE9 100%)',
          }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Glowing orbs */}
          <div className="orb w-64 h-64 top-10 -left-20"
               style={{ background: 'rgba(255,107,157,0.18)' }} />
          <div className="orb w-80 h-80 bottom-0 right-0"
               style={{ background: 'rgba(255,182,193,0.22)' }} />

          {/* Heart icon */}
          <motion.div
            animate={phase === 'reveal'
              ? { scale: [1, 1.5, 0], opacity: [1, 1, 0] }
              : { scale: [1, 1.08, 1] }
            }
            transition={phase === 'reveal'
              ? { duration: 0.8, ease: 'easeInOut' }
              : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            }
            className="text-7xl mb-8 select-none"
          >
            💗
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-3xl md:text-4xl text-rose font-light tracking-widest mb-2 text-glow"
          >
            For Mom
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body text-mauve text-sm tracking-[0.25em] mb-12"
          >
            preparing something special…
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-petal/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #FF6B9D, #FFB6C1)',
                width: `${progress}%`,
              }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8 }}
            className="font-body text-xs text-mauve mt-3 tracking-widest"
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
