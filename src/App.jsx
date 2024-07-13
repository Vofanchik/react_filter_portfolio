import { useState } from 'react'
import './App.css'
import { projects } from './components/projects';
import Portfolio from './components/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Portfolio projects={projects} />
    </div>
  )
}

export default App
