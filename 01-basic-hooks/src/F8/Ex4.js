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

const Ex4 = () => {
  const [checked, setChecked] = useState(2)
  console.log(checked)
  console.log(courses)


  const handleSubmit = () => {
    console.log({id: checked})
  }

  return (
    <div style={{padding: 32}}>
      {courses.map(course => {
        return (<div key={course.id}>
          <input 
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>)
      })}
      
      <button onClick={handleSubmit}>Change</button>
    </div>
  )
}

export default Ex4