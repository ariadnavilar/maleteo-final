import React from 'react';
import {Link, NavLink} from "react-router-dom"

export function GuardiansNavBar() {

    return (
        <div className="align-items-end">
            <div className="separator"></div>
            <div className="navbar">
                <NavLink exact to="/chatguardian" activeClassName="orangeicon" className="navicons">
                    <span className="pi pi-comments"></span>
                </NavLink>
                <NavLink exact to="guardianglobe" activeClassName="orangeicon" className="navicons">
                    <span className="pi pi-globe"></span>
                </NavLink>
                <NavLink exact to="/calendar" activeClassName="orangeicon" className="navicons">
                    <span className="pi pi-calendar"></span>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="orangeicon" className="navicons">
                    <span className="pi pi-user icons"></span>
                </NavLink>
            </div>
        </div>
    );
}
