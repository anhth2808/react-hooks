import { useState } from "react";


// Random gift
// two-ways binding

const Ex3 = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    console.log(name, email)
  }

  return (
    <div style={{padding: 32}}>
      <input value = {name} onChange={ e => setName(e.target.value)} />
      <input value = {email} onChange={ e => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Change</button>
    </div>
  )
}



export default Ex3