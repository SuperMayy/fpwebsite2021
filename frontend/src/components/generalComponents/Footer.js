import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <ul className="footer-links">
              <Link to="/tandc">
                <li>T&C</li>
              </Link>
              <Link to="/privacy">
                <li>Privacy</li>
              </Link>
              <Link to="/cookies">
                <li>Cookies</li>
              </Link>
              <Link to="/">
                <li className="logo-footer"><span>+</span>FIONITA’S PROJECT</li>
              </Link>
              <Link to="/contact"><li>Contact Us</li></Link>
              <Link to="/jobs">
                <li>Jobs</li>
              </Link>
              <Link to="/forms"><li>Forms</li></Link>
            </ul>
            <hr/>
            <div className="footer-middle" style={{textAlign: "center"}}>
              <a href="https://m.facebook.com/fionitasproject/?tsid=0.30914701511751264&source=result"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/fionita%E2%80%99s-project-cic-a28374197/"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://twitter.com/fionitasproject"><i class="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/fionitasproject/?igshid=ak0imsih2srt"><i class="fab fa-instagram"></i></a>
            </div>
            <p>2020 Fionita's Poject</p>
        </div>
    )
}

export default Footer;
