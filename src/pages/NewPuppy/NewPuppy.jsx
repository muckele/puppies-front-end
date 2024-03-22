// npm modules
import { useState } from "react"

// css
import './NewPuppy.css'

const NewPuppy = (props) => {
    const [form, setForm] = useState({
    name: '',
    breed: '',
    age: 0,
    color: 'Grey',
    ears: 'Button'
  })

  return (
    <main className="new">
      <h1>NEW PUPPY</h1>
      <form autoComplete="off">
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          placeholder="Name"
        />
        <label htmlFor="age-input">Age</label>
        <input
          required
          min="0"
          type="number"
          name="age"
          id="age-input"
          placeholder="Age"
        />

        <label htmlFor="breed-input">Breed</label>
        <input
          required
          type="text"
          name="breed"
          id="breed-input"
          placeholder="Breed"
        />

        <label htmlFor="color-input">Color</label>
        <select required name="color" id="color-input">
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Brown">Brown</option>
          <option value="White">White</option>
          <option value="Golden">Golden</option>
        </select>

        <label htmlFor="ears-input">Ears</label>
        <select required name="ears" id="ears-input">
          <option value="Drop">Drop</option>
          <option value="Pointy">Pointy</option>
          <option value="Button">Button</option>
        </select>

        <button type="submit">SUBMIT</button>

      </form>
    </main>
  )
}

export default NewPuppy