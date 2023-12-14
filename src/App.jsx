import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import InputTodo from './components/ToDo/TodoList'

// import "./components/Navbar.css";
import { CORE_CONCEPTS } from './assets/data'
import TabButton from './components/TabButton'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      
     

      <Footer />
    </>
  )
}

export default App
