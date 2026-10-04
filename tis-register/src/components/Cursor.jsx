import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40 }), sy = useSpring(y, { stiffness: 500, damping: 40 })
  const [hot, setHot] = useState(false)
  useEffect(() => {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return
    document.body.classList.add('has-cursor')
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); setHot(!!e.target.closest('a,button,input,[data-hot]')) }
    window.addEventListener('mousemove', move)
    return () => { window.removeEventListener('mousemove', move); document.body.classList.remove('has-cursor') }
  }, [x, y])
  return (
    <motion.div aria-hidden style={{ x: sx, y: sy, position: 'fixed', top: 0, left: 0, zIndex: 99, pointerEvents: 'none', translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hot ? 64 : 18, height: hot ? 64 : 18, backgroundColor: hot ? 'rgba(244,212,78,.55)' : 'rgba(214,52,44,1)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="cursor-dot" />
  )
}
