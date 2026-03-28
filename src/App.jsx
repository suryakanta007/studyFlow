import React, { useContext } from 'react'
import SessionList from './components/SessionList'
import NavBar from './components/NavBar'
import SessionForm from './components/SessionForm'
import { SessionContext } from './context/SessionContext'

const App = () => {

  const {toggle,setToggle} = useContext(SessionContext);
  return (
    <div className='bg-[#071824] h-screen '>
      <NavBar/>
      {
        toggle ? <SessionForm/>:<SessionList/>
      }
    </div>
  )
}

export default App