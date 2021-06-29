function Rating(props) {
  let coolAirplane = "";
  for(let i = 0; i < props.rating; i +=1) {
    coolAirplane += '✈︎';
  }
  return (
    <p>{coolAirplane}</p>
  );
}

export default Rating;