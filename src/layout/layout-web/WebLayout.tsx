import React from 'react'
import { Outlet } from 'react-router-dom'

const WebLayout = () => {
  return (
    <>
        <p>WebLayout</p>
        <Outlet />
    </>
  )
}

export default WebLayout