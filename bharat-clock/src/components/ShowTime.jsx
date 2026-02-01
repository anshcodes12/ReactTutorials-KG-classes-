import React from 'react'

let Time = new Date();

function ShowTime() {
  return (
    <div><h2>This is the current time: {Time.toLocaleTimeString()} - {Time.toLocaleDateString()}</h2></div>
  )
}

export default ShowTime