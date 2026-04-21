import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="no-underline">
          <h3 className="m-0 text-lg font-semibold text-gray-900 dark:text-gray-100">Kafè</h3>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Home</Link>
          <Link to="/login">
            <button className="px-3 py-2 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700">Sign in</button>
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
