import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthPage } from './pages/AuthPage'
import { me } from './redux/ducks/auth/sagas'
import { PrivateRoute } from './components/common/PrivateRoute'
import { useSelector } from "react-redux"
import { CircularProgress } from '@mui/material'
import { selectInitialized } from './redux/ducks/app/selectors'
import { initializeApp } from './redux/ducks/app/sagas'
import { selectAuthenticated } from './redux/ducks/auth/selectors'
import { Box } from '@mui/system'
import { storage } from './utils/utils'



function App() {
  const dispatch = useDispatch()

  const initialized = useSelector(selectInitialized)

  useEffect(() => {

    dispatch(initializeApp())

  }, [dispatch])

  if (!initialized) {
    return <Box display="flex" height="100vh" justifyContent="center" alignItems="center" > <CircularProgress /></Box >
  }
  return (

    <Routes>
      <Route path="/home/*" element={<PrivateRoute ><Home /></PrivateRoute>} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  )
}

export default App
