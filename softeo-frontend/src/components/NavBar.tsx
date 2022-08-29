import React from 'react'
import * as C from '../css/App.styles'
import softeoLogo from '../img/softeoLogo.png'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const NavBar = () => {
  return (
    <C.Navbar>
      <img src={softeoLogo} alt="Softeo" />
    </C.Navbar>
  )
}
