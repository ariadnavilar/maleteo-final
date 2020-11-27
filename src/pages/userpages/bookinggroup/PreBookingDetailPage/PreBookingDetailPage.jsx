import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {UsersNavBar} from "../../shared/UsersNavBar/UsersNavBar";
import {API} from '../../../../shared/services/api';
import "./PreBookingDetailPage.scss";

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
        "guardian": guardian.id,
    });

    const maletas = Number(luggage)
    let precio = maletas * 6;
    let preciototal = precio + 2;


    const saveDates = () => {
        API.post("bookings/register", data).then(res => {
            console.log('Reserva completada');
        })
    }

    return (
        <div>
            <button className="back-btn">
                <a href="javascript:history.back()"><span className="pi pi-chevron-left back-btn"></span></a>
            </button>
            <p style={{'fontSize': '15pt'}}>Detalles de tu reserva</p>
            <div className="reservas">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <p className="prebooking__field">Llegada</p>
                            <p style={{'font-size': '14px'}}>{new Date(deposit).toLocaleDateString()}</p>
                        </div>
                        <div className="col-4">
                            <p className="prebooking__field">Recogida</p>
                            <p style={{'font-size': '14px'}}>{new Date(withdrawal).toLocaleDateString()}</p>
                        </div>
                        <div className="col-4">
                            <p className="prebooking__field">Equipaje</p>
                            <p style={{'font-size': '14px'}}>{luggage} Eq.</p>
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
                                <p>{precio}€</p>
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
                                <p className="prebooking__field">{preciototal}€</p>
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
