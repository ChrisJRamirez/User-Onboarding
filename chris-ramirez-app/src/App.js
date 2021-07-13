import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import * as yup from "yup"
import Form from "./Form"
import schema from "./Schema"
import {validate} from "uuid"

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
  const [disabled, setDisabled] = useState(initialDisabled)

  //helper functions
  const getUsers = () =>{
    axios.get("https://reqres.in/api/users")
      .then(res => {
        setUsers(res.data)   // may have to double check res.data if not working later *****
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
  }


  //event handler
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
