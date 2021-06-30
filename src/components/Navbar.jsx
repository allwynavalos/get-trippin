import {Link} from "react-router-dom";

function Navbar () {
  return (
    <nav>
      <Link className="navLink" to ="/">Home'</Link>
      <Link  className="navLink" to = "/new">New Trip</Link>
      <Link className="navLink" to = "/trip">Trip</Link>
    </nav>
  )
}

export default Navbar;