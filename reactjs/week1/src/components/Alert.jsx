import "./Alert.css"
import React from 'react'

function Alert({ type, message, onClose }) {
    if (!type) return null
    return (
        <div className={`alert alert-${type}`}>
            <span>{message}</span>
            <button className="close-btn" onClick={onClose}>
                x
            </button>
        </div>
    )
}

export default Alert