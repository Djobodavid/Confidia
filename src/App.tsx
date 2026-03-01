
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import Header from './components/NavBar'
import About from './page/about'
import Home from './page/home'
import Service from './page/service'
import Design from './page/design'
import Contact from './page/contact'
import FormulaireContact from './page/registre'


function App() {


  return (
    <div
      className='hero'
    >

      
        
     
     <BrowserRouter>
      <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registre" element={ <FormulaireContact/>}/>
       </Routes>
     </BrowserRouter>
      {/* <div> <Accueil/>
        <a href="https://vite.dev" target="_blank">
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </div> 
  )
}

export default App
