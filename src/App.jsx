 
import './App.css'
import { initViewportHeight } from 'vh-calculation-fix';


function App() {

    useEffect(() => {
    const stop = initViewportHeight({ updateOnFocus: true });
    return () => stop();
  }, []);
  

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
