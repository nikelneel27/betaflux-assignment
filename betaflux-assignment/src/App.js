import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import SignIn from './components/SignIn'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App
