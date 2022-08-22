import { useState } from "react";

const gifts = [
  'cpu i9',
  'Ram 32GB RGB',
  'RGB Keyboard'
]

// Random gift
// one way binding

const Ex2 = () => {
  const [gift, setGift] = useState()


  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])
  }

  return (
    <div style={{padding: 32}}>
      <h1>{gift || 'Chưa có thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  )
}



export default Ex2