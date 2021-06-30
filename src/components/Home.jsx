import {Link} from "react-router-dom";





const Home = (props) => {
 return (
    <main className="home">
   <div className="homeTitle">
    <h1>Get Trippin'</h1>
  </div>
    <Link to="/new"><button className="homeBtn" style={{textDecoration:"none",}}>New Trip</button></Link>
    <Link to="/trip"><button  className="homeBtn"style={{textDecoration:"none",}}>Trip</button></Link>
</main>


 )
}
export default Home;