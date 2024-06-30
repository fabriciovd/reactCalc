import { useState } from 'react'
import CalcBody from './components/CalcBody'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className='container'>
      <CalcBody/>
    </div>
  )
}

export default App
