import { MouseEvent } from 'react'
import './App.css'

function App() {
  const undo = () => {}
  const redo = () => {}
  const makeDot = (e: MouseEvent) => {
    console.log(e)
  }

  return (
    <div className="App">
      <div className="header">
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
      <div className="dots" onClick={makeDot}></div>
    </div>
  )
}

export default App
