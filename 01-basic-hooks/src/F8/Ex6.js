import { useState } from "react"





// todolist


const Todolist = () => {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem('jobs')) ?? []
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs)
      return newJobs
    })
    setJob('')
  }

  return (
    <div>
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>
        })}
      </ul>
    </div>

  )

}




export default Todolist