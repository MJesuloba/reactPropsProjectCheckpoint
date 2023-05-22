import { useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import Person from './components/profile/Person'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Person fullName='Moore Jesuloba' bio='I am  Full Stack Developer' profession='Software Engineering' campName='GoMyCode'/>
    </div>
  )
}

export default App

