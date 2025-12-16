import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <Link style={{padding: "10px"}} to ="/">Home</Link>
        <Link style={{padding: "10px"}} to ="/about">Sobre</Link>
        <Link style={{padding: "10px"}} to ="/contact">Contato</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Sobre />} />
        <Route path='/contact' element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
