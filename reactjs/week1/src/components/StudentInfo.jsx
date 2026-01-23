import React from 'react'

function StudentInfo({src, name, classn}) {
  return (
    <div>
        <img src={src} alt={name} />
        <p>{name}</p>
        <p>{classn}</p>
    </div>
  )
}

export default StudentInfo