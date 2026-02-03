import { Link, useNavigate } from "react-router";
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import './Header.css';

function Header() {
    
    const navigate = useNavigate();

    return(
        <div className="Header">
            <Link to="/" className="Header-left">
                <img className="Header-logo" src="/lotus_logo.png"/>
                My Yoga Practice
            </Link>
            <div className="Header-center">
                <div className="Header-menu-item" onClick={()=> navigate("/")}><HomeIcon /></div>
                <div className="Header-menu-item" onClick={()=> navigate("/yoga-asanas/all")}>Asanas</div>
                <div className="Header-menu-item" onClick={()=> navigate("/builder")}>Sequence builder</div>
            </div>
            <div className="Header-right Header-menu-item">
                <Tooltip title="Profile" className="tooltip"><PersonIcon/></Tooltip>
            </div>
        </div>
    )
}

export default Header;