import axios from "axios";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {baseURL, config} from "../services";


function Form(props) {
  const[where, setWhere] = useState('');
  const[attraction, setAttraction] = useState('');
  const[need, setNeed] = useState ('');
  const[rating, setRating] = useState (1);
  const[comment, setComment] = useState('');
  const history = (useHistory);
  const params = useParams();
  useEffect(() =>{
    if(params.id && props.trips.length > 0) {
      const tripToEdit = props.trips.find((trip) => trip.id === params.id);
      if(tripToEdit) {
        setWhere(tripToEdit.fields.where);
        setAttraction(tripToEdit.fields.attraction);
        setNeed(tripToEdit.fields.need);
        setRating(tripToEdit.fields.rating);
        setComment(tripToEdit.fields.comment);
      }
    }
  },[params.id,props.trips])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTrip = {
      where,
      attraction,
      need,
      rating,
      comment,
    };
    if (params.id) {
      const tripURL = `${baseURL}/${params.id}`;
      await axios.put(tripURL, { fields: newTrip }, config);
    } else {
     
      await axios.post(baseURL, { fields: newTrip}, config);
    }
    
    props.setToggleFetch((curr) => !curr);
    setTimeout(() =>{

    
    history.push("/")
    },1400);
  }
  return (
    
    <form onSubmit = {handleSubmit}>
      <label htmlFor="where">Where:</label>
      <input
      id="where"
      type="text"
      onChange={(e) => setWhere(e.target.value)}
      value={where}
      />
      
      <label htmlFor="attraction">Attraction:</label>
      <input
      id="attraction"
      type="text"
      onChange={(e) => setAttraction(e.target.value)}
      value={attraction}
      />

<label htmlFor="need">Need:</label>
      <input
      id="need"
      type="text"
      onChange={(e) => setNeed(e.target.value)}
      value={need}
      />

<label htmlFor="rating">Rating:</label>
      <input
      id="rating"
      type="range"
      min={1}
      max={5}
      onChange={(e) => setRating(e.target.valueAsNumber)}
      value={rating}
      />

<label htmlFor="comment">Comment:</label>
      <input
      id="comment"
      type="text"
      onChange={(e) => setComment(e.target.value)}
      value={comment}
      />
      <button className="formBtn" type="submit">Submit</button>
    </form>
  )
}
export default Form;