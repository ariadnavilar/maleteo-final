import React from "react";
import "./BookingCompletedPage.scss";
import {useHistory} from "react-router-dom";


export default function BookingCompletedPage() {

    const history = useHistory();

    const findRedirect = () => {
        history.push("/findguardian")
    }

    return (
        <div>
            <div className="closewindow">
                <button onClick={findRedirect} className="gobackbtn">
                    <span className ="pi pi-times completed"></span>
                </button>
            </div>
            <h3>Reserva Completada</h3>
            <div className="centered">
                <img className="logofenix" src={require("./assets/img/fenix.png")}/>
            </div>
            <h5>BE FREE!</h5>
            <p>Contacta ya con tu guardián y espera que acepte tu reserva</p>
        </div>

    )
}

