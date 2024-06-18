import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Dashboard from '../Pages/Dashboard'
import Monitoring from '../Pages/Monitoring'
import MonitoredURLs from '../Pages/MonitoredURLs'
import Settings from '../Pages/Settings'
import CustomerProfile from '../Pages/CustomerProfile'


const AdminRouters = () => {
  return (
<Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/monitoring" element={<Monitoring/>} />  
      <Route path="/monitoring/:customerId" element={<CustomerProfile/>} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/monitored-urls" element={<MonitoredURLs />} />
</Routes>  )

}

export default AdminRouters