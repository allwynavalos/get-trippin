import {Link} from "react-router-dom";
import './Form.css';


function Footer () {
  return (
  <footer>
    
    <nav>
      <Link className="navLink" to ="/">Home</Link>
      <Link  className="navLink" to = "/new">New Trip</Link>
      <Link className="navLink" to = "/trip">Trip</Link>
    </nav>
      
      
    </footer>
  )
}

export default Footer;