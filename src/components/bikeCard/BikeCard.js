import './BikeCard.css';

function BikeCard({ bike }) {

    function clickedBike() {
        console.log(bike);
        // console.log(bike.origin);
      }

    return (
        <div className="bike-card" onClick={clickedBike}>
            <img src={bike.image} alt={bike.name} />
            <h2>Manufacturer: {bike.name}</h2>
            <h3>Manufactured in: {bike.origin}</h3>
            <h3>Frame Material: {bike.material}</h3>
            <h3>Discipline: {bike.discipline}</h3>

        </div>
    )

}

export default BikeCard;