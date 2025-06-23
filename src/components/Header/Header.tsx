import { Link, useNavigate } from "react-router";
import Tooltip from '@mui/material/Tooltip';
import ListIcon from '@mui/icons-material/List';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import './Header.css';

function Header() {
    
    const navigate = useNavigate();

    return(
        <div className="Header">
            <Link to="/" className="Header-title">
                <img className="Header-logo" src="/lotus_logo.png"/>
                My Yoga Practice
            </Link>
            <div className="Header-navbar">
                <Tooltip title="Poses" className="tooltip"><ListIcon onClick={()=> navigate("/yoga_poses")}/></Tooltip>
                <Tooltip title="Create" className="tooltip"><AddCircleOutlineIcon onClick={()=> navigate("/add_pose")}/></Tooltip>
                <Tooltip title="Profile" className="tooltip"><PersonIcon/></Tooltip>
            </div>
        </div>
    )
}

export default Header;