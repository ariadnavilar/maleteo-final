import React from "react";
import "./FirstWelcomePage.scss";
import { Link } from "react-router-dom"


export default function FirstWelcomePage() {

    return (

        <div className='wrapper contenedorBienvenido'>
            <div>
                <div className='fondoBlanco col-xs-12'>
                    <div className='contImagen'>
                        <img src={require("./assets/img/cadena@2x.png")} className='cadenaimagen' />
                    </div>
                    <h1 className='tituloBienvenido'>
                        Prepárate para liberarte de tu equipaje
                    </h1>
                    <div className='textito'>
                        <p>Encuentra a tu guardián y disfruta
                    a tu manera. Miles de usuarios ya están aprovechando las ventajas.</p>
                    </div>
                    <div className="centered">
                        <Link className="linkeo" to="secondpage">
                            <input className="orangebtn" type="submit" value="Continuar" />
                        </Link>

                    </div>
                </div>
            </div>
        </div>


    )

}