import React from "react";
import {useHistory} from "react-router-dom";
import "./WelcomePage.scss";


export default function SecondWelcomePage() {

    const history = useHistory();

    const linkToSearch = () => {
        history.push('/findguardian')
    }

    return (

        <div className="home__background">
                <div className="welcome__container">
                        <img src={require("../../../assets/img/world@2x.png")} className="worldimagen" />
                    <p className="welcome__title">El mismo precio en cualquier parte</p>
                    <p>Dispondrás de un precio fijo estés donde estés sin importar el tamaño o el peso</p>
                    <button className="orangebtn" onClick={linkToSearch}>Continuar</button>
                </div>
        </div>
    )
}
