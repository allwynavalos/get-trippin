import React from "react";
import { Link , Router} from "react-router-dom";





const Home = (props) => {
 return (
   <nav>
<Link to ="/">Home'</Link>
<Link to = "/new">New Trip</Link>
</nav>
);
 }

export default Home;