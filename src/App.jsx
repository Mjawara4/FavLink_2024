import { useState } from 'react'
import './App.css'
import Form from './components/Form' 
import Table from './components/Table'

function App() {
  const [favLinks, setFavLinks] = useState([])

  const handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data])
  }

  return (
    <>
      <h1>Submit your Fav LINKS</h1>
      <Form onNewSubmit={handleNewSubmission}/>
      <Table links={favLinks}/>
    </>
  )
}

export default App