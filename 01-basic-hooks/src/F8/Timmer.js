
import {useState, useEffect} from 'react'


// 1. useEffect(callback)
// - gọi callback mỗi khi component re-render
// - gọi callback sau khi component them element
// 2. useEffect(callback, [])
// - chỉ gọi 1 lần sau khi component được mounted
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi

// ==============================
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted

const tabs = ['posts', 'albums', 'comments']

function Timmer() {
  const [countdown, setCountdown] = useState(180)

  useEffect(() => {  
    const timerId = setInterval(() => {
      setCountdown(prevState => prevState - 1)
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])


  return (
    <div>
      <h2>{countdown}</h2>
    </div>
  )
}


export default Timmer