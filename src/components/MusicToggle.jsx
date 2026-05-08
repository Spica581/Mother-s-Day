// components/MusicToggle.jsx
// Floating music toggle button — plays a gentle looping audio file

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// We'll use a free royalty-free music URL
// You can replace this with your own audio file placed in /public/music.mp3
const MUSIC_URL = '/Salamat.mp3'

export default function MusicToggle() {
  const audioRef  = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loaded,  setLoaded]  = useState(false)
  const [volume,  setVolume]  = useState(0.35)

  useEffect(() => {
    const audio      = new Audio(MUSIC_URL)
    audio.loop       = true
    audio.volume     = volume
    audio.preload    = 'auto'
    audioRef.current = audio
    audio.addEventListener('canplaythrough', () => setLoaded(true))
    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <motion.button
      onClick={toggle}
      title={playing ? 'Pause music' : 'Play music'}
      aria-label={playing ? 'Pause background music' : 'Play background music'}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 right-5 z-50 glass rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      style={{
        boxShadow: playing
          ? '0 0 20px rgba(255,107,157,0.5), 0 4px 15px rgba(0,0,0,0.1)'
          : '0 4px 15px rgba(0,0,0,0.1)',
      }}
    >
      {/* Sound wave animation when playing */}
      {playing && (
        <div className="absolute inset-0 rounded-full" style={{
          border: '2px solid rgba(255,107,157,0.5)',
          animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        }} />
      )}

      <span className="text-lg relative z-10">
        {playing ? '🎵' : '🔇'}
      </span>
    </motion.button>
  )
}
