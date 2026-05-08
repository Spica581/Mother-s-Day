// App.jsx
// Root component — manages page state, transitions, loading screen

import React, { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import LoadingScreen from './components/LoadingScreen'
import Navigation    from './components/Navigation'
import MusicToggle   from './components/MusicToggle'

import WelcomePage   from './pages/WelcomePage'
import ReasonsPage   from './pages/ReasonsPage'
import MemoriesPage  from './pages/MemoriesPage'
import FunnyPage     from './pages/FunnyPage'
import ThankYouPage  from './pages/ThankYouPage'
import PromisesPage  from './pages/PromisesPage'
import FinalPage     from './pages/FinalPage'

const PAGES = [
  WelcomePage,
  ReasonsPage,
  MemoriesPage,
  FunnyPage,
  ThankYouPage,
  PromisesPage,
  FinalPage,
]

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } },
}

export default function App() {
  const [loading,     setLoading]     = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [direction,   setDirection]   = useState(1)  // 1 = forward, -1 = back

  const goTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(PAGES.length - 1, index))
    setDirection(clamped > currentPage ? 1 : -1)
    setCurrentPage(clamped)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const goNext    = () => goTo(currentPage + 1)
  const goPrev    = () => goTo(currentPage - 1)
  const goRestart = () => goTo(0)

  const CurrentPage = PAGES[currentPage]

  return (
    <>
      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Main app (visible after loading) */}
      {!loading && (
        <>
          <Navigation
            currentPage={currentPage}
            onNavigate={goTo}
            total={PAGES.length}
          />

          <MusicToggle />

          {/* Animated page container */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <CurrentPage
                onNext={goNext}
                onPrev={goPrev}
                onRestart={goRestart}
              />
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  )
}
