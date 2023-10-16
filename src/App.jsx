import "./App.css";
import {useState, createContext} from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
//import { createContext, useState } from 'react'
//import {Link, Routes, Route} from "react-router-dom"

//export const MyContext=createContext()



function App() {
   
  const [language, setLanguage] = useState(" ")
    
     const translation = {
        Ger: "Hallo Welt",
      Eng: "Hello World",
      Afg: "سلام دنیا",
      Spn: "Hola Mundo",
      Frn: "Bonjour le monde",
      Tur: " Selam Dünya"
       }

console.log(language)
const greeting= translation[language]

console.log(greeting)

return (
<div>
<Header setLanguage={setLanguage}></Header>
<Content greeting={greeting}></Content>


</div>
)    
}

export default App;
