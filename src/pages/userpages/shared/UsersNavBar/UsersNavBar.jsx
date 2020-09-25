import React from 'react';
import "./UsersNavBar.scss";
import {Link} from "react-router-dom";

export function UsersNavBar() {
    return (
        <div className="navbar">
            <Link to="/"><i className="pi pi-home" style={{'fontSize': '2.7em','text-decoration':'none', 'color': 'black'}}></i></Link>
            <Link to="guardiansearch"><i className="pi pi-search" style={{'fontSize': '2.7em','text-decoration':'none', 'color': 'black'}}></i></Link>
            <i className="pi pi-comments" style={{'fontSize': '2.7em'}}></i>
            <i className="pi pi-user" style={{'fontSize': '2.7em'}}></i>

        </div>
    );
}

