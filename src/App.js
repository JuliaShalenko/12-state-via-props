import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const incrementCoutn = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCoutn} />
      <Button onClick={incrementCoutn} />
      <Button onClick={incrementCoutn} />
      <Button onClick={incrementCoutn} />
    </div>
  )
}

export default App
