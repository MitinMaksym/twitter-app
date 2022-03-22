import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AuthPage } from './pages/AuthPage'
import { PrivateRoute } from './components/common/PrivateRoute'
import { useSelector } from "react-redux"
import { CircularProgress } from '@mui/material'
import { selectInitialized } from './redux/ducks/app/selectors'
import { initializeApp } from './redux/ducks/app/sagas'
import { Box } from '@mui/system'
import { ErrorNotification } from './components/common/ErrorNotification'



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
    <>
      <Routes>
        <Route path="/home/*" element={<PrivateRoute ><Home /></PrivateRoute>} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <ErrorNotification />
    </>
  )
}

export default App
