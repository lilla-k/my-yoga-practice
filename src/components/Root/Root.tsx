import './Root.css';
import { Outlet } from "react-router";
import Header from '../Header/Header.jsx';

function Root(){

    return(
        <div className="Root">
            <Header />
            <Outlet />
        </div>
    )
}

export default Root;