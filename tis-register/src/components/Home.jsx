import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import s from './Home.module.css'

const PERIODS = [
  ['8:30', 'Assembly', 'Every day starts together: a thought for the day, announcements and a shared moment of calm.'],
  ['9:00', 'Primary years', 'Curiosity-led classrooms where reading, numbers and play build strong foundations.'],
  ['11:00', 'Middle years', 'Projects, labs and clubs that turn what students learn into things they can make.'],
  ['1:00', 'Senior years', 'Board-focused guidance, career counselling and leadership roles across the campus.'],
  ['3:30', 'After the bell', 'Sports, arts, music and community service fill the afternoon.'],
]
const STATS = [['25+', 'years of teaching', -2], ['1:20', 'teacher to student ratio', 1.5], ['40+', 'clubs and activities', -1]]

const Reveal = ({ children, i = 0, className }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * 0.12, duration: 0.6 }}>{children}</motion.div>
)

export default function Home({ user, onLeave, theme, setTheme }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  const [open, setOpen] = useState(0)
  const dark = theme === 'dark'
  return (
    <>
      <motion.div className={s.bar} style={{ scaleX }} />
      <header className={s.nav}>
        <span className={s.logo}>TIS</span>
        <span className={s.who}>{user.name} ({user.role}) is present</span>
        <span style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setTheme(dark ? 'light' : 'dark')} aria-pressed={dark}>
            <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} style={{ display: 'inline-block' }}>{dark ? 'Chalkboard' : 'Notebook'}</motion.span>
          </button>
          <button onClick={onLeave}>Sign out</button>
        </span>
      </header>
      <main>
        <section className={s.sec}>
          <p className={s.time}>8:30 am, Assembly</p>
          <motion.h1 className={s.h1} initial={{ clipPath: 'inset(0 100% 0 0)' }} animate={{ clipPath: 'inset(0 0% 0 0)' }} transition={{ duration: 1, ease: [0.7, 0, 0.2, 1] }}>
            Every day at TIS is <span className={s.mark}>well spent.</span>
          </motion.h1>
          <p className={s.lead}>Welcome, {user.name}. Tulas International School gives children a full school day: learning, play and character, from the first bell to the last.</p>
          <a className={s.cta} href="#admissions">Start admission enquiry</a>
        </section>
        <section className={s.sec} id="day">
          <Reveal><h2 className={s.h2}>A day at TIS</h2></Reveal>
          {PERIODS.map(([t, h, p], i) => (
            <Reveal key={h} i={i * 0.5}>
              <button className={`${s.period} ${open === i ? s.open : ''}`} onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className={s.t}>{t}</span><h3>{h}</h3><p>{p}</p>
              </button>
            </Reveal>
          ))}
        </section>
        <section className={s.sec}>
          <div className={s.stats}>
            {STATS.map(([n, l, r], i) => (
              <Reveal key={l} i={i}><div className={s.stat} style={{ '--r': `${r}deg` }} data-hot><b>{n}</b>{l}</div></Reveal>
            ))}
          </div>
        </section>
        <section className={s.sec} id="admissions">
          <Reveal><h2 className={s.h2}>Take a seat for next year.</h2>
            <p className={s.lead}>Admissions are open. Tell us about your child and our team will call you back to plan a campus visit.</p>
            <a className={s.cta} href="https://tis.edu.in/">Visit tis.edu.in</a></Reveal>
        </section>
      </main>
      <footer className={s.foot}><span>Tulas International School, Dehradun</span><span>Redesign concept</span></footer>
    </>
  )
}
