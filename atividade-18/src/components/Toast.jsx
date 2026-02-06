import { motion } from "motion/react"

export default function Toast({ handleClick }) {
  return (
    <motion.div
      exit={{ y: -300, opacity: 0 }}
      className="top-4 left-50 fixed flex items-end gap-2"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="mb-2 font-semibold text-red-700 text-xl">Alert!</h3>
        <p className="text-gray-600">
          Warning: Você não devia apertar este botão
        </p>
      </div>
    </motion.div>
  )
}
