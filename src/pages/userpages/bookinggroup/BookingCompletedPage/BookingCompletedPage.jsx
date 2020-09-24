import React from "react";
import "./BookingCompletedPage.scss"


export default function BookingCompletedPage() {

    return (

        <div className="logoDiv">
            <div className="firstline">
                <div className="parrafo1">
                    <h2>Reserva Completada</h2>
                </div>
                <div className="icone">
                    <span className ="pi pi-times"></span>
                </div>
            </div>
            <div className="logofenix">
                <img src={require("./assets/img/fenix.png")}/>
            </div>
            <div className="parrafo2">
                <h3>BE FREE!</h3>
            </div>
            <div className="parrafo3">
                <p>Contacta ya con tu guardian y espera que acepte tu reserva</p>
            </div>

        </div>

    )
}

