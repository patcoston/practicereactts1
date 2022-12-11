import { MouseEvent, useState } from 'react'
import './App.css'

interface Dot {
  x: number
  y: number
  visible: boolean
}

const dotWidth = 10
const dotHeight = 10

function App() {
  const [dots, setDots] = useState<Dot[]>([])

  const undo = () => {
    const dot = dots.findLast(dot => dot.visible)
    if (dot) {
      dot.visible = false
      setDots([...dots])
    }
  }

  const redo = () => {
    const dot = dots.find(dot => !dot.visible)
    if (dot) {
      dot.visible = true
      setDots([...dots])
    }
  }

  const makeDot = (e: MouseEvent) => {
    const x = e.clientX - dotWidth / 2
    const y = e.clientY - dotHeight / 2
    setDots([...dots, { x, y, visible: true }])
  }

  return (
    <div className="App">
      <div className="header">
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
      <div className="dots" onClick={makeDot}>
        {dots.map(({ x, y, visible }, i) => {
          return visible ? (
            <div key={`dot-${i}`} className="dot" style={{ left: x, top: y }} />
          ) : undefined
        })}
      </div>
    </div>
  )
}

export default App
