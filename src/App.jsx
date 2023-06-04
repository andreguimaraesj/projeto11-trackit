import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Habits from './pages/Habits'
import Tracker from './pages/Tracker'
import Today from './pages/Today'
import { UserContext } from './constants/usercontext'

function App() {
  const [userInfo, setUserInfo] = useState('');
  const [completedHabits, setCompletedHabits] = useState(0);

  return (
    <UserContext.Provider value={{userInfo, setUserInfo, completedHabits, setCompletedHabits}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Registration />} />
        <Route path='/habitos' element={<Habits />} />
        <Route path='/historico' element={<Tracker />} />
        <Route path='/hoje' element={<Today />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App