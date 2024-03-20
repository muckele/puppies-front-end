//npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as puppyService from './services/puppyService'

//pages
import Landing from './pages/Landing/Landing'

//components
import Nav from './components/Nav'


function App() {
  const [puppies, setPuppies] = useState([])

  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index()
      setPuppies(data)
    }
    fetchPuppies()
  }, [])

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={ <h1>PUPPY LIST</h1>} />

      </Routes>
    </>
  )
}

export default App
