import {Link} from "react-router-dom";
import './Form.css';


function Footer () {
  return (
  <footer>
    
    <nav>
      <Link className="navLink" to ="/">Home</Link>
      <Link  className="navLink" to = "/new">New Trip</Link>
      <Link className="navLink" to = "/trip">Trip</Link>
      <h3 className="footerName">Ollie Avalos</h3>
      <div>
    
      </div>
    </nav>
    </footer>
  )
}

export default Footer;