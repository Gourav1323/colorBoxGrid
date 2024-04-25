import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Toogler from './toogler'
import TooglerCounter from './ToogeleCounter'
import ColorBox from './colorBox'
import ColorBoxGrid from './colorBoxGrid'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toogler/>
    < Counter/>
    <TooglerCounter/>
    <ColorBoxGrid/>
    <ColorBox/>  </>
  )
}

export default App
