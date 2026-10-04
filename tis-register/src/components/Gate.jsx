import { useState } from 'react'
import { motion } from 'framer-motion'
import s from './Gate.module.css'

const ROLES = ['Parent', 'Student', 'Visitor']
const GHOSTS = [['Aarav S.', '8:29'], ['Meera K.', '8:31']]

export default function Gate({ onEnter }) {
  const [role, setRole] = useState('Parent')
  const [name, setName] = useState('')
  const [err, setErr] = useState('')
  const [stamped, setStamped] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (name.trim().length < 2) return setErr('Write your name (at least 2 letters) to mark attendance.')
    setErr(''); setStamped(true)
    setTimeout(() => onEnter({ name: name.trim(), role }), 1100)
  }

  return (
    <main className={s.wrap}>
      <motion.form className={s.sheet} onSubmit={submit} noValidate
        initial={{ rotate: -4, y: 60, opacity: 0 }} animate={{ rotate: -1, y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 90, damping: 14 }}>
        <h1 className={s.title}>Tulas International School<br />Morning Register</h1>
        <p className={s.sub}>Sign in to step inside.</p>
        {GHOSTS.map(([n, t]) => <div key={n} className={s.ghost}><span>{n}</span><b>Present {t}</b></div>)}
        <div className={s.row}>
          <label>I am a</label>
          <div className={s.chips} role="group" aria-label="Role">
            {ROLES.map((r) => <button type="button" key={r} className={s.chip} aria-pressed={role === r} onClick={() => setRole(r)}>{r}</button>)}
          </div>
        </div>
        <div className={s.row}>
          <label htmlFor="n">My name</label>
          <input id="n" className={s.input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" aria-invalid={!!err} />
          {err && <p className={s.err} role="alert">{err}</p>}
        </div>
        <button className={s.go} disabled={stamped}>Mark me present</button>
        {stamped && (
          <motion.div className={s.stamp} initial={{ scale: 3, opacity: 0, rotate: -25 }} animate={{ scale: 1, opacity: 1, rotate: -12 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
            PRESENT
          </motion.div>
        )}
      </motion.form>
    </main>
  )
}
