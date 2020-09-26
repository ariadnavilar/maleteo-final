import React from "react";
import './LoginRegisterNavBar.scss';
import { NavLink } from "react-router-dom";

export default function LoginRegisterNavBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <NavLink to="/login" isActive={(match, location) => {
                        if(!match) {
                            return false;
                        }
                    }}><h3 className="textlogin">Iniciar sesión</h3>
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink to="/register" isActive={(match, location) => {
                        if(!match) {
                            return false;
                        }
                    }}><h3 className="textlogin">Regístrate</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
