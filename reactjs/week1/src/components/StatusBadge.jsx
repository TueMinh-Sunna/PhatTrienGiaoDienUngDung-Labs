import React from 'react'
import './StatusBadge.css'

function StatusBadge(props) {
    return (
        <div>
            <button
                className={`status-badge ${props.status}`}
            ></button>
        </div>
    )
}

export default StatusBadge