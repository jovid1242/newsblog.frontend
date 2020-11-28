import React from "react";
import { Link } from "react-router-dom";

function Search() {
    return (
        <ul className="responsive-menu-bar">
            <li className="menu-button">
                <Link to="#"><i className="fa fa-bars"></i></Link>
            </li>
            <li className="search-icon">
                <input
                    className="search-box"
                    placeholder="Search Anything.."
                    type="text" />
                <i className="fa fa-search"></i>
            </li>
        </ul>
    );
}

export default Search;