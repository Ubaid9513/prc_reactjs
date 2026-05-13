import React from 'react'
import Cards from './components/cards'

const App = () => {
  var arr = [
    {
      name: "Maham",
      age: 15,
      para: "Hy How are you",
      button: "Click Here",
    },
    {
      name: "Maira",
      age: 22,
      para: "Hy How are you",
      button: "Click Here",
    },
    {
      name: "Aliza",
      age: 30,
      para: "Hy How are you",
      button: "Click Here",
    },
    {
      name: "Saba",
      age: 26,
      para: "Hy How are you",
      button: "Click Here",
    },
    {
      name: "Yousra",
      age: 20,
      para: "Hy How are you",
      button: "Click Here",
    },
    {
      name: "Fabiha",
      age: 19,
      para: "Hy How are you",
      button: "Click Here",
    },
  ];
  return(
  arr.map((elem,idx) => {
    return (
      <Cards key={idx} name={elem.name} age={elem.age} para={elem.para} btn={elem.button} />
    )
  }))
}

export default App
