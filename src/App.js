import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Auth from './pages/auth';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import './App.scss';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login/email" element={<Login />} />
        <Route path="/signup/password" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
