import { motion } from "motion/react"

//Card genérico para aceitar tanto animações internas quanto animações de variants externas
export default function Card({ children, title, variants }) {
  const animationProps = variants
    ? {}
    : {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 1.2 },
      }

  return (
    <motion.div variants={variants} {...animationProps} className="m-0">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="mb-2 font-semibold text-black text-xl">{title}</h3>
        <p className="text-gray-600">{children}</p>
      </div>
    </motion.div>
  )
}
