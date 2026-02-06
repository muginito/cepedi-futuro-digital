import { AnimatePresence, motion } from "motion/react"
import "./App.css"
import AnimatedButton from "./components/AnimatedButton"
import Card from "./components/Card"
import CardsList from "./components/CardsList"
import Toast from "./components/Toast"
import { useEffect, useState } from "react"

function App() {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow(!show)

  // useEffect para esconder Toast após 3 segundos sempre que show mudar para true
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => setShow(false), 3000)
      return () => clearTimeout(timeout)
    }
  }, [show])

  return (
    <>
      <div className="flex gap-4">
        <Card title={"Card 1"}>Description for card 1.</Card>
        <Card title={"Card 2"}>Description for card 2.</Card>
        <Card title={"Card 3"}>Description for card 3.</Card>
      </div>
      <hr className="m-6 border-gray-700" />
      <AnimatedButton>Enviar</AnimatedButton>
      <hr className="m-6 border-gray-700" />
      <h1>ToDo List</h1>
      <CardsList />
      <hr className="m-6 border-gray-700" />
      <AnimatePresence>
        {show && <Toast handleClick={toggleShow} />}
      </AnimatePresence>
      <AnimatedButton handleClick={toggleShow}>Toggle alert</AnimatedButton>
    </>
  )
}

export default App
