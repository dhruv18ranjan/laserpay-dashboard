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
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './pages/dashboard/Dashboard';
import Integration from './pages/integration/Integration';
import Insights from './pages/Insights/Insights';
import Billings from './pages/billings/Billings';
import Credentials from './pages/credentials/Credentials';


function App() {
  return (
    <Router>
      <div className='app'>
          <Sidebar />
        <div className='routes'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/credentials' element={<Credentials />} />
          <Route exact path='/settings' element={<Settings />} />
          <Route exact path='/integrations' element={<Integration />} />
          <Route exact path='/insights' element={<Insights />} />
          <Route exact path='/billings' element={<Billings />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
