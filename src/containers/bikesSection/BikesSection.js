import './BikesSection.css';

import BikeCard from '../../components/bikeCard/BikeCard';

function BikesSection({ bikes }) {

    const displayBikes = () => {
        return bikes.map(bike => {
            return <BikeCard key={bike.name} bike={bike} />
        });
    }

    return (
        <section className="bikes">
            { displayBikes() }
        </section>
    );
}

export default BikesSection;