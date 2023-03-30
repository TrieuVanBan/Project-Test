import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebLayout from './layout/layout-web/WebLayout'
import Signin from './page/signin/Signin'
import Login from './page/login/Login'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route index element={<Signin />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
