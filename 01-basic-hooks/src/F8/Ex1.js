import { useState } from "react";

const orders = [100, 200, 300]

const Ex1 = () => {
  const [counter, setCounter] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur)
    return total
  })

  const handleIncrease = () => {
    setCounter(prevState => prevState + 1)
  }

  return (
    <div className="Ex1" style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}



export default Ex1