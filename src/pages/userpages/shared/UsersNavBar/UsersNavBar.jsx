import React from 'react';
import "./UsersNavBar.scss";
import {Link} from "react-router-dom";

export function UsersNavBar() {
    return (
        <div className="navbar">
            <Link to="/"><span className="pi pi-home navicons"></span></Link>
            <Link to="guardiansearch"><span className="pi pi-search navicons"></span></Link>
            <span className="pi pi-comments navicons"></span>
            <Link to="/profile"><span className="pi pi-user navicons"></span></Link>

        </div>
    );
}

