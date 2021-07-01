import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  return (
    <main className="home">
      <div className="container">
        <div className="title">
          <div id="title1">
            <h1>Get </h1>
          </div>
          <div id="title2">
            <h1>Trippin'</h1>
          </div>
        </div>
        <div className="homeBtn">
          <Link  to="/new">
            <button id="newBtn" >New Trip</button>
          </Link>
          <Link  to="/trip">
            <button id="tripBtn" >Trip</button>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Home;
