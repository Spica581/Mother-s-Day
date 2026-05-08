// hooks/useTypewriter.js
// Typewriter effect hook — types a string character by character

import { useState, useEffect, useRef } from 'react'

/**
 * @param {string}  text       - The full string to type out
 * @param {number}  speed      - Milliseconds per character (default 60)
 * @param {number}  startDelay - Delay before typing begins (ms, default 0)
 * @param {boolean} loop       - Whether to loop the animation (default false)
 */
export function useTypewriter(text = '', speed = 60, startDelay = 0, loop = false) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const indexRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    indexRef.current = 0

    const start = setTimeout(() => {
      timerRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          setDisplayed(text.slice(0, indexRef.current + 1))
          indexRef.current += 1
        } else {
          clearInterval(timerRef.current)
          setDone(true)
          if (loop) {
            setTimeout(() => {
              setDisplayed('')
              setDone(false)
              indexRef.current = 0
            }, 2000)
          }
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(start)
      clearInterval(timerRef.current)
    }
  }, [text, speed, startDelay, loop])

  return { displayed, done }
}
