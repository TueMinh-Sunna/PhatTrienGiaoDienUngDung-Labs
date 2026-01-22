import "./LoginForm.css"
import React from 'react'

function LoginForm() {
    return (
        <div className="login-wrapper">
            <form className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                />
                <input
                    type="text"
                    placeholder="Password"
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm