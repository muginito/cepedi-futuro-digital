import { motion } from "motion/react"
import Card from "./Card"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function CardsList() {
  return (
    <motion.ul variants={container} initial="hidden" animate="visible">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <li key={i} className="m-6">
          <Card title={`TODO: #${i + 1}`} variants={item}>
            Description for TODO #{i + 1}.
          </Card>
        </li>
      ))}
    </motion.ul>
  )
}
