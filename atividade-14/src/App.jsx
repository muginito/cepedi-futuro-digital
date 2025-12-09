import { useState } from 'react'
import Message from './components/Message.jsx'
import CounterButton from './components/CounterButton.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Message text={count} />
      <CounterButton func={() => setCount(count => count + 1)} label="Aumentar" />
      <CounterButton func={() => setCount(count => count > 0 ? count - 1 : count)} label="Diminuir" />
    </>
  )
}

export default App
