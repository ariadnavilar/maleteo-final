import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {UsersNavBar} from "../../shared/UsersNavBar/UsersNavBar";
import { API } from '../../../../shared/services/api';


export default function PreBookingDetailPage() {

    const fechasdereserva = localStorage.datasearch;
    const user = JSON.parse(localStorage.user);
    const guardian = JSON.parse(localStorage.dataGuardian);
    let llegada = JSON.parse(fechasdereserva);
    let deposit = llegada['deposit'];
    let withdrawal = llegada['withdrawal'];
    let luggage = llegada['luggage'];
    let emailUser = user.email;

    const [data, setData] = useState({
        "initialDate": deposit,
        "finalDate": withdrawal,
        "nSuitcases": Number(luggage),
        "client": emailUser,
        "guardian": guardian.id
    });

    const saveDates =() => {
        API.post("bookings/register", data).then(res => {
            console.log('Reserva completada');
        })
    }

    return (
        <div>

            <button className="containerarrow">
                <a href="javascript:history.back()"><span className="pi pi-chevron-left gobackbtn"></span></a>
            </button>
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
                    <button className="orangebtn" onClick={saveDates}>Reservar</button>
                </Link>
            </div>


            <UsersNavBar/>

        </div>


    );
}
