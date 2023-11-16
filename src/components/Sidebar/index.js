import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faHome, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
const [showNav, setShowNav] = useState(false);


return (

  <div className="nav-bar">
    <Link className="logo" to="/"
   onClick={() => setShowNav(false)}>
      <img src={LogoS} alt="logo" />

     </Link>

    <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink 
      exact="true" activeclassname="active" to="/"
     onClick={() => setShowNav(false)}>
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
        onClick={() => setShowNav(false)}
        >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
       onClick={() => setShowNav(false)}
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
        >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>
      <NavLink
       onClick={() => setShowNav(false)}
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
        >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <FontAwesomeIcon 
      onClick={() => setShowNav(false)}
        icon={faClose}
        color='aqua'
        size='3x'
        className='close-icon'
      />
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/medijay">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ahmed-gbenjo-81404a210/"
          >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Medihuncho"
          >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/medijay01"
          >
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </a>
      </li>
    </ul>
    <FontAwesomeIcon
    onClick={() => setShowNav(true)}
    icon={faBars}
    color='aqua'
    size='3x'
    className='hamburger-icon'
    />

  </div>
)
}

export default Sidebar
