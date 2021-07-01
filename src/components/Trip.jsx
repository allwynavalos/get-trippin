import {Link} from "react-router-dom";
import axios from "axios";
import Rating from "./Rating";
import {baseURL, config} from "../services";

function Trip(props) {
  const {where, attraction, need, rating, comment} = props.trip.fields;

  const deleteTrip = async () => {
    const tripURL = `${baseURL}/${props.trip.id}`;
    await axios.delete(tripURL, config);
    props.setToggleFetch((curr) =>!curr);
  }

  return(
   
    <article>
      <h3>{where}</h3>
      <h3>{attraction}</h3>
      <h3>{need}</h3>
      <h3>{comment}</h3>
      <Rating rating={rating} />
      <button className="deleteBtn" onClick={deleteTrip}>Delete Trip!</button>
      <Link to={`/edit/${props.trip.id}`}>
        <button className="editBtn" >Edit Trip!</button>
      </Link>
    </article>
  )
}

export default Trip;