import {Link} from "react-router-dom";
import axios from "axios";
import Rating from "./Rating";
import {baseURL, config} from "../services";

function Trip(props) {
  const {where, attraction, needs, rating, comments} = props.trip.fields;

  const deleteTrip = async () => {
    const tripURL = `${baseURL} / ${props.trip.id}`;
    await axios.delete(tripURL, config);
   props.setToggleFetch((curr) =>!curr);
  }

  return(
    <article>
      <h3>{where}</h3>
      <h3>{attraction}</h3>
      <h3>{needs}</h3>
      <Rating rating={rating} />
      <h3>{comments}</h3>
      <button onClick={deleteTrip}>Delete Trip!</button>
      <Link to={`/edit/${props.trip.id}`}>
        <button>Edit Trip!</button>
      </Link>
    </article>
  )
}

export default Trip;