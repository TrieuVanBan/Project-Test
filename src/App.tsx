import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebLayout from './layout/layout-web/WebLayout'
import Signin from './page/signin/Signin'
import Login from './page/login/Login'
import ForgotPwd from './page/forgot-pwd'
import LayoutAdmin from './layout/layout-admin'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebLayout />}>
            <Route index element={<Login />} />
            <Route path="signin" element={<Signin />} />
            <Route path="forgotPwd" element={<ForgotPwd />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<LayoutAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
