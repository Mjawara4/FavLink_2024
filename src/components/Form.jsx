import { useState } from "react"
import PropTypes from 'prop-types';

function Form({ onNewSubmit }) {
    const [name, setName] = useState("")
    const [URL, setURL] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name === "" || URL === "") {
            alert("Name and URL are Required")
        } else {
            onNewSubmit({ name, URL })
            setName("")
            setURL("")
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleURLChange = (event) => {
        setURL(event.target.value)
    }    
    
    return (
      <form onSubmit={handleSubmit}> 
        <label htmlFor="linkName">Link Name </label>
        <input type="text" id="linkName" value={name} onChange={handleNameChange}/>
        <br/>
  
        <label htmlFor="linkURL">Link URL </label>
        <input type="text" id="linkURL" value={URL} onChange={handleURLChange}/>
        <br />
        <br />
  
        <input type="submit" disabled={name === "" || URL === ""} />
      </form>
    )
}

Form.propTypes = {
  onNewSubmit: PropTypes.func.isRequired,
};

export default Form