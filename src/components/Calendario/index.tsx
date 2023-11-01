import { useState } from 'react'
import Calendar from 'react-calendar'
import './App.css'
import 'react-calendar/dist/Calendar.css'
import { useNavigate } from 'react-router-dom'
function App() {
  const [date] = useState(new Date())
  const navigate = useNavigate()

  return (
    <div className="app">
      <button className="botao" onClick={() => navigate('/')}>
        Voltar a Home
      </button>
      <div className="calendar-container">
        <Calendar />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  )
}

export default App
