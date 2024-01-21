
import { useEffect, useState, MouseEvent } from 'react'
import './App.css'
import Button from './components/Button/Button'

function App() {
  const [counter, setCounter] = useState<number>(0); //требуется доп типизация

  useEffect(() => {
    console.log('Test');
  }, []); //useEffect не требует доп типизации

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  }

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
    </>
  )
}

export default App
