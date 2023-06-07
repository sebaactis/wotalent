import React from 'react'
import NavBarItems from './NavBarItems'
import logo from '../../assets/images/logocowo.png'
import { BsLinkedin } from 'react-icons/bs'

const NavBar = () => {

  return (
    <>
      <nav className="navBarStyle navbar navbar-expand-lg">
        <div className="container-fluid">
          <img className="logo" src={logo} alt='logo' />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <NavBarItems isInFooter={false} />
          </div>
          <a href="https://www.linkedin.com/company/cowotalent/" target="_blank">
            <BsLinkedin className="linkedinLogo" />    
            </a>
        </div>
      </nav>
    </>
  )
}

export default NavBar;