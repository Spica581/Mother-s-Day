import React, { useRef, useState } from 'react'

const MUSIC_URL = '/salamat.mp3'

export default function MusicToggle() {
  const audioRef = useRef(new Audio(MUSIC_URL))
  const [playing, setPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current

    try {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        audio.loop = true
        audio.volume = 0.35

        await audio.play()

        setPlaying(true)
      }
    } catch (err) {
      console.error('Audio failed:', err)
    }
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-5 right-5 z-50 bg-pink-500 text-white rounded-full w-14 h-14"
    >
      {playing ? '🎵' : '🔇'}
    </button>
  )
}