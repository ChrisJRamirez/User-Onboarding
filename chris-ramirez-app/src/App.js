import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import * as yup from "yup"
import Form from "./Form"
import User from "./User"
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
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setUsers([...users, res.data.data])
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

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,  /// should you trim a password?
      termsOfService: [].filter(terms => formValues[terms]),  /// this may not work
    }
    postNewUser(newUser)
  }


  ///side effects
  useEffect(() => {
    getUsers()
  }, [])


  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users App</h1>
      </header>

      <section className="Form-inputs">
        <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />
        
        {
          users.map(user => {
            return (
              <User key={user.id} details={user} />
            )

          })
          
        }

      </section>
        
    </div>
  );
}

export default App;
