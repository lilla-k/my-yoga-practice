import './Header.css';

function Header() {
    return(
        <div className="Header">
            <div className="Header-title">
                <img className="Header-logo" src="/lotus_logo.png"/>
                My Yoga Practice
            </div>
            <div className="Header-navbar">
                <div>Home</div>
                <div>Explore</div>
                <div>New</div>
            </div>
        </div>
    )
}

export default Header;