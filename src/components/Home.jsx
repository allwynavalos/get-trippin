import {Link} from "react-router-dom";
import './Home.css';       





const Home = (props) => {
 return (
    <main className="home">
   {/* <div className="getTitle">
    <h1>Get </h1>
  </div> */}
  <div id="containerHome">
  <h1 id="title1">Get </h1>
  <h1>Trippin'</h1>
  <Link id="newBtn" to="/new"><button style={{textDecoration:"none",}}>New Trip</button></Link>
    <Link to="/trip"><button style={{textDecoration:"none",}}>Trip</button></Link>
  </div>
  {/* <div className="trippinTitle">
    <h1>Trippin'</h1>
  </div>
  <div className="homeBtn"> 
    <Link to="/new"><button style={{textDecoration:"none",}}>New Trip</button></Link>
    <Link to="/trip"><button style={{textDecoration:"none",}}>Trip</button></Link>
    </div>
// </main> */}
</main>


 )
}
export default Home;