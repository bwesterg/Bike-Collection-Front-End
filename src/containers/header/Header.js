import './Header.css'

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
                My Bike Search
            </h1>
            <nav>
                <a href="">Distributing</a>
                <a href="">Licensing</a>
                <a href="">Shipping</a>
            </nav>
        </header>
    );
}

export default Header;