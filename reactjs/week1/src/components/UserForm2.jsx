import React, { useState } from 'react'

function UserForm2() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

  return (
    <div>
        <input 
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder='name' />
        <br />
        <input 
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder='email' />
        <br />
        <input 
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder='age' />

        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>

    </div>
  )
}

export default UserForm2