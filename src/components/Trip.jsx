import {Link} from "react-router-dom";
import axios from "axios";
import Rating from "./Rating";
import {baseURL, config} from "../services";
import './Trip.css';

function Trip(props) {
  const {where, attraction, need, rating, comment, image} = props.trip.fields;

  const deleteTrip = async () => {
    const tripURL = `${baseURL}/${props.trip.id}`;
    await axios.delete(tripURL, config);
    props.setToggleFetch((curr) =>!curr);
  }

  return(
   
    <article>
      <img src={image} alt="flags"></img>
      <h3>Where: {where}</h3>
      <h3>Attraction: {attraction}</h3>
      <h3>Need: {need}</h3>
      <h3>Comments: {comment}</h3>
      <Rating rating={rating} />
      <button className="deleteBtn" onClick={deleteTrip}>Delete Trip!</button>
      <Link to={`/edit/${props.trip.id}`}>
        <button className="editBtn" >Edit Trip!</button>
      </Link>
    </article>
  )
}

export default Trip;