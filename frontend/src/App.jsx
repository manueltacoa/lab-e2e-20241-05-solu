import './styles/App.css'
import { 
	BrowserRouter as Router, 
	Routes, 
	Route,
	Navigate } from 'react-router-dom'
import { Navbar } from './layout/Navbar'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'

function App() {
  
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<h1>Page not found :C</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
