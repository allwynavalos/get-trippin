import {Link} from "react-router-dom";

function Navbar () {
  return (
    <nav>
      <Link to ="/">Home'</Link>
      <Link to = "/new">New Trip</Link>
    </nav>
  )
}

export default Navbar;