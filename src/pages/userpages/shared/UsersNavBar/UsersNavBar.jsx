import React from 'react';
import "./UsersNavBar.scss";
import {Link, NavLink} from "react-router-dom";

export function UsersNavBar() {

    return (
        <div className="align-items-end">
            <div className="separator"></div>
            <div className="navbar">
                <NavLink exact activeClassName="orange" to="/"><span className="pi pi-home navicons"></span></NavLink>
                <Link to="guardiansearch"><span className="pi pi-search navicons"></span></Link>
                <span className="pi pi-comments navicons"></span>
                <NavLink exact activeClassName="orange" to="/profile"><span className="pi pi-user navicons"></span></NavLink>
            </div>
        </div>
    );
}
