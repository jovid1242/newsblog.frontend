import React from "react";
import { Link } from "react-router-dom";

function Icons() {
    return (
        <ul className="menu-icons">
            <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
            <li><Link to="#"><i className="fa fa-telegram"></i></Link></li>
            <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
            <li className="search-icon"><input className="search-box" placeholder="Search Anything.."
                type="text" /><i className="fa fa-search"></i></li>
        </ul>
    );
}

export default Icons;