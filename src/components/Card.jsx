function Card({
    cardClassName,
    title,
    locationName,
    price
}) {
  return (
    <div className="card">
        <div className={`entire_city_box ${cardClassName}`}>
            <div className='city_box_text'>
                <div> Title: {title} </div>
                <div> Location: {locationName} </div>
                <div> Price: {price} </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
