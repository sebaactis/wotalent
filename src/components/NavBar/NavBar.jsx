import NavBarItems from './NavBarItems'
import logo from '../../assets/images/wologo.png'
import { BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavBar = ({accessToken}) => {

  return (
    <>
      <nav className="navBarStyle navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/"><img className="logo" src={logo} alt='logo' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <NavBarItems isInFooter={false} accessToken={accessToken} />
            <a href="https://www.linkedin.com/company/cowotalent/" target="_blank">
              <BsLinkedin className="linkedinLogo" />
            </a>
          </div>

        </div>
      </nav>
    </>
  )
}

export default NavBar;