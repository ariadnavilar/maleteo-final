import React from 'react';
import "./BookingDetail.scss";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {UsersNavBar} from "../../../../shared/UsersNavBar/UsersNavBar";


export function BookingDetail() {

    const fechasdereserva = localStorage.datasearch;
    let llegada = JSON.parse(fechasdereserva);
    let deposit = llegada['deposit'];
    let withdrawal = llegada['withdrawal'];
    let luggage = llegada['luggage'];


    console.log(fechasdereserva);
    console.log(deposit);
    console.log(withdrawal);
    console.log(luggage);


    return (
        <div>
            <div className="encabezado">
                <Link to="/guardiansearch"><i className="pi pi-chevron-left"/></Link>
            </div>
            <br/>
            <p style={{'fontSize': '15pt'}}>Detalles de tu reserva</p>
            <div className="reservas">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <h5>Llegada</h5>
                            <p style={{'font-size': '14px'}}>{deposit}</p>
                        </div>
                        <div className="col-4">
                            <h5>Recogida</h5>
                            <p style={{'font-size': '14px'}}>{withdrawal}</p>
                        </div>
                        <div className="col-4">
                            <h5>Equipaje</h5>
                            <p style={{'font-size': '14px'}}>{luggage} Equipajes</p>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="contenidoreserva">
                    <div className="container-fluid">





                            <div className="row">
                                <div className="col-6">
                                    <p>Primeras 24 horas 6,00 x 2 equipajes</p>
                                </div>
                                <div className="col-6">
                                    <p>10€</p>
                                </div>
                            </div>




                            <div className="row">
                                <div className="col-6">
                                    <p>Gastos de gestión</p>
                                </div>
                                <div className="col-6">
                                    <p>2 €</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-6">
                                    <p>Servicio asegurado hasta 1000€</p>
                                </div>
                                <div className="col-6">
                                    <p>Gratis</p>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-6">
                                    <p>Total</p>
                                </div>
                                <div className="col-6">
                                    <p>12€</p>
                                </div>
                            </div>


                    </div>
                </div>
            </div>


            <div className="centered">
                <Link to="/completedbooking">
                    <button className="orangebtn">Reservar</button>
                </Link>
            </div>


            <UsersNavBar/>

        </div>


    );
}