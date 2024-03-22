//npm modules
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// services
import * as puppyService from './services/puppyService'

//pages
import Landing from './pages/Landing/Landing'
import PuppyList from './pages/PuppyList/PuppyList'
import NewPuppy from './pages/NewPuppy/NewPuppy'

//components
import Nav from './components/Nav.jsx'


function App() {
  const navigate = useNavigate()
  const [puppies, setPuppies] = useState([])

  
  useEffect(() => {
    const fetchPuppies = async () => {
      const data = await puppyService.index()
      setPuppies(data)
    }
    fetchPuppies()
  }, [])
  
  const handleAddPuppy = async formData => {
    const newPuppy = await puppyService.create(formData)
    setPuppies([newPuppy, ...puppies])
    navigate('/puppies')
  }

  const handleRemovePuppy = async (puppyId) => {
    const removedPuppy = await puppyService.delete(puppyId)
    setPuppies(puppies.filter((p) => p._id !== removedPuppy._id))
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/puppies' element={
          <PuppyList 
            puppies={puppies}
            handleRemovePuppy={handleRemovePuppy} 
          />
        } />
        <Route path='/puppies/new' element={
          <NewPuppy handleAddPuppy={handleAddPuppy} />
        } />
      </Routes>
    </>
  )
}

export default App
