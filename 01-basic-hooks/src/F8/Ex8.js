import { useState } from "react"


import Timmer from "./Timmer"

// todolist


const Ex7 = () => {
  const [show, setShow] = useState(false)


  return (
    <div style={{padding: 30}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Timmer />}
    </div>

  )

}




export default Ex7