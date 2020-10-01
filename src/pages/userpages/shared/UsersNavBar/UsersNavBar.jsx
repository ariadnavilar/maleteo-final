import React from 'react';
import "./UsersNavBar.scss";
import {Link, NavLink} from "react-router-dom";

export function UsersNavBar() {

   const logged = localStorage.getItem("token");
    let route;
    let classActive;

    if(logged){

        route = "/findguardian"
        classActive = ""
    }
    else{
        route = "/";
        classActive= "orangeicon";
    }


    return (
        <div className="align-items-end">
            <div className="separator"></div>
            <div className="navbar">
                
                <NavLink  exact to={route} activeClassName={classActive} className="navicons">
                    <span className="pi pi-home icons"></span>
                </NavLink>
                <NavLink exact to="/findguardian" activeClassName="orangeicon" className="navicons">
                    <span className="pi pi-search icons"></span>
                </NavLink>
                <NavLink exact to="/messages" activeClassName="orangeicon" className="navicons">
                    <span className="pi pi-comments icons"></span>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="orangeicon" className="navicons">
                    <span className="pi pi-user icons"></span>
                </NavLink>
            </div>
        </div>
    );
}
