import React from "react";
import './LoginRegisterNavBar.scss';
import { NavLink } from "react-router-dom";

export default function LoginRegisterNavBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="login__container col">
                    <NavLink to="/login" activeClassName="login__text-active">
                        <h3 className="login__text">Iniciar sesión</h3>
                        <div className="under"></div>
                    </NavLink>
                </div>
                <div className="login__container col">
                    <NavLink to="/register" activeClassName="login__text-active">
                        <h3 className="login__text">Regístrate</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
