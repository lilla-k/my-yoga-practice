import { Link } from "react-router";
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';

function Header() {
    return(
        <div className="Header">
            <Link to="/" className="Header-title">
                <img className="Header-logo" src="/lotus_logo.png"/>
                My Yoga Practice
            </Link>
            <div className="Header-navbar">
                <Tooltip title="Search" className="tooltip"><SearchIcon/></Tooltip>
                <Tooltip title="Create" className="tooltip"><AddCircleOutlineIcon/></Tooltip>
                <Tooltip title="Profile" className="tooltip"><PersonIcon/></Tooltip>
            </div>
        </div>
    )
}

export default Header;