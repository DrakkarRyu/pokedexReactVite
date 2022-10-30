import { Routes, Route } from 'react-router-dom'
import { Home, Pokedex, PokedexById, ProtectedRoutes } from './pages'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<PokedexById />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
