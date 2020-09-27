import React from "react";
import "./SecondWelcomePage.scss";
import { Link } from "react-router-dom"


export default function SecondWelcomePage() {

    return (

        <div className='wrapper contenedorBienvenido'>
            <div>
                <div className='fondoBlanco col-xs-12'>
                    <div className='contImagen'>
                        <img src={require("./assets/img/world@2x.png")} className="worldimagen" />
                    </div>
                    <h1 className='tituloBienvenido'>
                        El mismo precio en cualquier parte
                    </h1>
                    <div className='textito'>
                        <p>Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso</p>
                    </div>
                    <div className="centered">
                        <Link className="linkeo" to="login">
                            <input className="orangebtn" type="submit" value="Empezar Ya" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}