import React from "react";
import "./WelcomePage.scss";
import { useHistory } from "react-router-dom";


export default function FirstWelcomePage() {

    const history = useHistory();

    const linkToSecondWelcome = () => {
        history.push('/secondpage')
    }

    return (

        <div className="home__background">
            <div className="welcome__container">
                <img src={require("../../../assets/img/cadena@2x.png")} className="welcome__img" />
                <p className="welcome__title">Prepárate para liberarte de tu equipaje</p>
                <p>Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya están aprovechando las ventajas.</p>
                <button className="orangebtn" onClick={linkToSecondWelcome}>Continuar</button>
            </div>
        </div>


    )

}
