import {useEffect, useState} from "react";
import axios from "axios";
import {Route} from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Trip from "./components/Trip";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { baseURL, config } from "./services";
import './App.css';

function App() {
  const [trips, setTrips] = useState([]);
  const [toggleFetch, setToggleFetch]  = useState(true);
  useEffect(() => {
    const fetchTrips = async () => {
      const resp = await axios.get(baseURL, config);
      setTrips(resp.data.records);
    }
    fetchTrips();
  },[toggleFetch]);
  return (
    <div className="App">
     <Navbar />
     <Route exact path="/">
     <Home /> 
     </Route>
     <Route path="/trip">
     <main>
     {trips.map((trip) =>(
       <Trip key={trip.id} trip={trip} setToggleFetch={setToggleFetch} />
     ))}
     </main>
     </Route>
     <Route path="/new">
       <Form setToggleFetch={setToggleFetch} />
     </Route>
     <Route path="/edit/:id">
       <Form trips={trips} setToggleFetch={setToggleFetch} />
     </Route>
     <Footer/>
    </div>
  );
}

export default App;
