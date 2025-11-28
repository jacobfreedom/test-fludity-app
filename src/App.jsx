import { useEffect } from 'react'
import './App.css'

const setViewportHeight = () => {
  const userAgent = navigator.userAgent || window.opera
  const isInAppBrowser = (
    /(; wv\)|WebView)/.test(userAgent) ||
    /FBAN|FBAV|Twitter|Instagram|LinkedIn/.test(userAgent) ||
    (/iPhone|iPod|iPad/.test(userAgent) && !/(Safari)/.test(userAgent))
  )

  if (!isInAppBrowser) {
    document.documentElement.style.setProperty('--svh', '100svh')
    document.documentElement.style.setProperty('--lvh', '100lvh')
    return () => {}
  }

  const vh = window.innerHeight
  const maxVh = (() => {
    const windowInnerHeight = window.innerHeight
    const visualViewportHeight = window.visualViewport ? window.visualViewport.height : windowInnerHeight

    const isIOS = /iPad|iPhone|iPod/.test(userAgent)
    if (isIOS) {
      return Math.min(visualViewportHeight, windowInnerHeight)
    }

    return Math.max(windowInnerHeight, visualViewportHeight)
  })()

  document.documentElement.style.setProperty('--svh', `${vh}px`)
  document.documentElement.style.setProperty('--lvh', `${maxVh}px`)

  return () => {}
}


function App() {

    useEffect(() => {
    const stop = setViewportHeight()
    return () => stop()
  }, [])
  

  return (
    <div>

      <section className="section">
        <h2>Section A — min-height: var(--lvh)</h2>
        <div className="card">
          <p>Spacing tokens use var(--lvh): padding-block var(--sp-y-95)</p>
          <p style={{ fontSize: 'var(--fs-20)' }}>Type token var(--fs-20)</p>
        </div>
      </section>

      <section className="section">
        <h2>Section B — Demonstrates scroll &gt; 100lvh</h2>
        <div className="card">
          <p>Layout uses var(--lvh) for visible height</p>
        </div>
      </section>

      <section className="section">
        <h2>Section C — Uses horizontal vw spacing</h2>
        <div className="card" style={{ paddingInline: 'var(--sp-x-268)' }}>
          <p>Padding-inline var(--sp-x-268)</p>
        </div>
      </section>

      <section className="section">
        <h2>Section D — Another var(--lvh) block</h2>
        <div className="card">
          <p>Extra content to push scroll beyond a single viewport</p>
        </div>
      </section>
    </div>
  )
}

export default App
