import React from "react"

export default function User({details}) {
  if (!details) {
    return <h3>Fetching your user details</h3>
  }

  return (
    <div className = "user-container">
      <h3>{details.name ? details.name : details.first_name & details.last_name}</h3>
      
      <p>Email: {details.email}</p>
      
      
    </div>
  )

}