import './Header.css'

import BikeCard from '../../components/bikeCard/BikeCard';

function Header() {

  


    return (
        <header className="header-style">
            <h1 id="logo">
                <img 
                    alt="bike search logo"
                    src="https://iconarchive.com/download/i89020/icons8/ios7/Transport-Bicycle.ico"
                />
            </h1>
            <h1 id="title">
                Bike Collection
            </h1>
            <div className="selected-bike">
                <h2>
                    {/* <BikeCard /> */}
                </h2>
            </div>
            <nav>
                <a href="">Distributing</a>
                <a href="">Licensing</a>
                <a href="">Shipping</a>
            </nav>
        </header>
    );
}

export default Header;