import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <p>Props in React, cool stuff</p>
   <Card 
   name = "Lam"
   img="https://tse1.mm.bing.net/th?id=OIP.FNKgH-k3128Wir1n8xce9AHaFj&pid=Api&P=0&h=220"
   tel="09034099326"
   email="lawrence@zempaa.com"
   />

<Card 
   name = "Jack"
   img="https://tse2.mm.bing.net/th?id=OIP.IxYxqsFErHah_8lZs2pUnwHaFj&pid=Api&P=0&h=220"
   tel="09034449326"
   email="lawrence@zempaa.com"
   />

<Card 
   name = "Jay"
   img="https://tse2.mm.bing.net/th?id=OIP.oDmSBTuPztchTANkrGOvcQHaE6&pid=Api&P=0&h=220"
   tel="09034050926"
   email="lawrence@zempaa.com"
   />


        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
