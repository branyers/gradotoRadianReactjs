import React, { useState } from 'react'
import Input from "./Input"

function App() {
const [degree,setDegree] = useState("")
const [radian,setRadian] = useState("")
const [title,setTtile]   = useState("Converter")

const toRadian = (grades) => {
    return grades * 0.01745;
};
  const toGrades = (radians) => {
    return radians * 57.296;
};


const Handlerdegree =(event) =>{
let value = event.target.value
setRadian(toRadian(value))
setTtile("Degrees to Radian")
}


const Handlerradian = (event) =>{
let value = event.target.value
setDegree(toGrades(value))
setTtile("Radian to Degrees")
}



  return (
      <div>
      <h1>{title}</h1>
          <Input type="text" value={degree} Changes = {Handlerdegree}/>
          <Input type="text" value={radian} Changes = {Handlerradian}/>
      </div>
  )
}

export default App