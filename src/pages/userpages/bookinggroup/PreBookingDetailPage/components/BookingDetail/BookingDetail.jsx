import React from 'react';
import "./BookingDetail.scss";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {UsersNavBar} from "../../../../shared/UsersNavBar/UsersNavBar";

export function BookingDetail() {





    return (
        <div>
            <div className="encabezado">
                <Link to="/guardiansearch"><i className="pi pi-chevron-left"
                                              style={{'fontSize': '1.5em', 'alignContent': 'left'}}/></Link>

                <p></p>
                <p style={{'fontSize': '15pt'}}>Detalles de tu reserva</p>
                <div>
                </div>
                <p></p>

            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <h5>Llegada</h5>
                        <h7>30 de sep</h7>
                    </div>
                    <div className="col-4">
                        <h5>Recogida</h5>
                        <h7>30 de sep</h7>
                    </div>
                    <div className="col-4">
                        <h5>Equipaje</h5>
                        <h7>1 equipaje</h7>
                    </div>
                </div>
                <p></p>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <h7>Primeras 24 horas
                                6,00 x 2 equipajes
                            </h7>
                            <p></p>
                            <h7>Gastos de gestión</h7>
                            <p></p>

                            <h7>Servicio asegurado
                                hasta 1000€
                            </h7>
                            <p></p>

                            <h7>Total</h7>
                        </div>
                        <div className="col-6">
                            <h7> 10 €</h7>
                            <p></p>


                            <h7> 2 €</h7>
                            <p></p>
                            <h7>Gratis</h7>
                            <p></p>

                            <h7>12€</h7>

                        </div>
                    </div>
                </div>
            </div>

            <p></p>


            <Link to="/completedbooking">
                <button className="botonreserva">Reservar</button>
            </Link>

            <UsersNavBar/>



        </div>




    );
}