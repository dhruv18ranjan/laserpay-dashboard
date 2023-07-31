import { useState } from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Template from './pages/template/Template';
import Random from './pages/random/Random';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Menu from './components/menu/Menu';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <Router>
      <div className='app'>
          <Sidebar />
        <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/settings' element={<Settings />} />
          <Route exact path='/template' element={<Template />} />
          <Route exact path='/random' element={<Random />} />
          <Route exact path='/random' element={<Random />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
