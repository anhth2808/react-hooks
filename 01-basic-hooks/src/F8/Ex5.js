import { useState } from "react";


// Random gift
// two-ways binding

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'Reactjs'
  },
]

const Ex5 = () => {
  const [checked, setChecked] = useState([])
  
  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }


  const handleSubmit = () => {
    console.log({id: checked})
  }

  return (
    <div style={{padding: 32}}>
      {courses.map(course => {
        return (<div key={course.id}>
          <input 
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>)
      })}
      
      <button onClick={handleSubmit}>Change</button>
    </div>
  )
}

export default Ex5