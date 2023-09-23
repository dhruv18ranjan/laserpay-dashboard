import { useState } from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import Dashboard from './pages/dashboard/Dashboard';
import Integration from './pages/integration/Integration';
import Insights from './pages/insights/Insights';
import Billings from './pages/billings/Billings';
import Credentials from './pages/credentials/Credentials';
import CreateCredentials from './pages/createCredentials/CreateCredentials';
import CreateEvent from './pages/createEvent/CreateEvent';
import DashboardDesigns from './pages/dashboard/dashboardDesigns/DashboardDesigns';
import DashboardEvents from './pages/dashboard/dashboardEvents/DashboardEvents';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { useSelector } from 'react-redux';
import CreateOrganization from './pages/createOrganization/CreateOrganization';



function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <>
      <Router>
        <div className='app'>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/' element={user ? <Home /> : <Login />} />
            <Route exact path='/create-org' element={user ? <CreateOrganization /> : <Login />} />
            <Route exact path='/:id/dashboard' element={user ? <Dashboard /> : <Login />} />
            <Route exact path='/credentials' element={user ? <Credentials /> : <Login />} />
            <Route exact path='/settings' element={user ? <Settings /> : <Login />} />
            <Route exact path='/integrations' element={user ? <Integration /> : <Login />} />
            <Route exact path='/insights' element={user ? <Insights /> : <Login />} />
            <Route exact path='/billings' element={user ? <Billings /> : <Login />} />
            <Route exact path='/:id/dashboard/events' element={user ? <DashboardEvents /> : <Login />} />
            <Route exact path='/:id/dashboard/designs' element={user ? <DashboardDesigns /> : <Login />} />
            <Route exact path='/:id/dashboard/create-credentials' element={user ? <CreateCredentials /> : <Login />} />
            <Route exact path='/:id/dashboard/create-events' element={user ? <CreateEvent /> : <Login />} />
          </Routes>
        </div>


      </Router>
    </>
  )
}



export default App
