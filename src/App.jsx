import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState('dvh')

  useEffect(() => {
    const doc = document.documentElement
    const value = mode === 'lvh' ? 'var(--lvh)' : mode === 'svh' ? 'var(--svh)' : '100dvh'
    doc.style.setProperty('--YH', value)
  }, [mode])

  return (
    <div>
      <div className="toolbar">
        <strong>Height mode:</strong>
        <div className="mode">
          <label><input type="radio" name="mode" checked={mode==='lvh'} onChange={() => setMode('lvh')} /> lvh</label>
          <label><input type="radio" name="mode" checked={mode==='svh'} onChange={() => setMode('svh')} /> svh</label>
          <label><input type="radio" name="mode" checked={mode==='dvh'} onChange={() => setMode('dvh')} /> dvh</label>
        </div>
      </div>

      <section className="section">
        <h2>Section A — min-height: var(--YH)</h2>
        <div className="card">
          <p>Spacing tokens use var(--YH): padding-block var(--sp-y-95)</p>
          <p style={{ fontSize: 'var(--fs-20)' }}>Type token var(--fs-20)</p>
        </div>
      </section>

      <section className="section">
        <h2>Section B — Demonstrates scroll &gt; 100lvh</h2>
        <div className="card">
          <p>Toggle lvh/svh/dvh to compare behavior under app chrome</p>
        </div>
      </section>

      <section className="section">
        <h2>Section C — Uses horizontal vw spacing</h2>
        <div className="card" style={{ paddingInline: 'var(--sp-x-268)' }}>
          <p>Padding-inline var(--sp-x-268)</p>
        </div>
      </section>

      <section className="section">
        <h2>Section D — Another var(--YH) block</h2>
        <div className="card">
          <p>Extra content to push scroll beyond a single viewport</p>
        </div>
      </section>
    </div>
  )
}

export default App
