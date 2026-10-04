import { useEffect, useState } from 'react'
import Gate from './components/Gate.jsx'
import Home from './components/Home.jsx'
import Cursor from './components/Cursor.jsx'

const KEY = 'tis-register'
export default function App() {
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY)) } catch { return null } })
  const [theme, setTheme] = useState('light')
  useEffect(() => { document.documentElement.dataset.theme = theme }, [theme])
  const enter = (u) => { try { localStorage.setItem(KEY, JSON.stringify(u)) } catch {} setUser(u) }
  const leave = () => { try { localStorage.removeItem(KEY) } catch {} setUser(null) }
  return (
    <>
      <Cursor />
      {user ? <Home user={user} onLeave={leave} theme={theme} setTheme={setTheme} /> : <Gate onEnter={enter} />}
    </>
  )
}
