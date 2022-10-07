import {useState, useEffect} from 'react'

export default function App() {

  const [apiRes, setApiRes] = useState([])

  useEffect(() => {
    
    async function apiCall() {
      const rawRes = await fetch('/api')
      setApiRes(await rawRes.json())
    }
    apiCall()

  }, [])

  return (
    <div>
      <h1>Hello</h1>
      <p>
        { apiRes.length === 0 ? "Loading . . ." : "Found:"}
      </p>
      {apiRes.map(member => <div key={member.id}>
          {member.name}
        </div>)}
    </div>
  )
}