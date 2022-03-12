import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (

    <Routes>
      <Route path="/home/*" element={<Home />} />
    </Routes>
  )
}

export default App
