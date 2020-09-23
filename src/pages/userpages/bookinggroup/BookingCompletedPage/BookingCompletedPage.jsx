import React from "react";
import "./BookingCompletedPage.scss"

export default function CompleteBooking() {

    return (
        <div className="logoDiv">
            <div className="firstline">
                <div className="parrafo1">
                    <h2>Reserva Completada</h2>
                </div>
                <div>
                    <span className ="pi pi-times"></span>
                </div>
            </div>
            <div className="logofenix">
                <img className="fenix" src={require('../assets/fenix@2x.png')} />
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

