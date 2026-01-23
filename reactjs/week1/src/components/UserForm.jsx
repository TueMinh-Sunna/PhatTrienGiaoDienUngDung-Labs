import React, { useState } from 'react'

function UserForm() {
    const [name, changeName] = useState('')
    const [email, changeEmail] = useState('')

    return (
        <div>
            <input
                type="text"
                placeholder='Name'
                value = {name}
                onChange={(e) => {
                    changeName(e.target.value)
                }}
                />
            <br />
            <input
                type="text"
                placeholder='Email'
                onChange={(e) => {
                    changeEmail(e.target.value)
                }}
                />
            <br />
            <p>Name: {name}</p>
            <p>Email: {email}</p>

        </div>
    )
}

export default UserForm