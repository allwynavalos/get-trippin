import {Link} from "react-router-dom";

function Footer () {
  return (
    <div>
      <h4>Ollie Avalos</h4>
    
    <nav>
      <Link to ="/">GetTrippin'</Link>
      <Link to = "/new">New Trip</Link>
    </nav>
    </div>
  )
}

export default Footer;