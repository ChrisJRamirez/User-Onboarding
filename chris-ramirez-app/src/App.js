import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import * as yup from "yup"

const initialFormValues = {
  //text inputs
  name: "",
  email: "",
  password: "",
  //checkboxes
  termsOfService: false,
}

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
}

const initialUsers = []
const initialDisabled = true


function App() {

  //States
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
