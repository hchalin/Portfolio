import React from 'react'
import { Cursor, Typewriter, useTypewriter  } from 'react-simple-typewriter'
type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Hayden Chalin",'<Climber />', '<Coder />', '<FUllstack Dev />']
  })

  return (
    <div>
      <Typewriter words={{}} />
    </div>
  )
}

export default Hero
