import { MouseEvent, useState } from 'react'
import './App.css'

interface Dots {
  x: number
  y: number
  visible: boolean
}

const dotWidth = 10
const dotHeight = 10

function App() {
  const [dots, setDots] = useState<Dots[]>([])
  const undo = () => {}
  const redo = () => {}
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
        {dots.map((dot, i) => (
          <div
            key={`dot-${i}`}
            className="dot"
            style={{ left: dot.x, top: dot.y }}
          />
        ))}
      </div>
    </div>
  )
}

export default App
