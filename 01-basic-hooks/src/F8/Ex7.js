import { useState } from "react"


import Content from "./Content"

// todolist


const Ex7 = () => {
  const [show, setShow] = useState(false)


  return (
    <div style={{padding: 30}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>

  )

}




export default Ex7