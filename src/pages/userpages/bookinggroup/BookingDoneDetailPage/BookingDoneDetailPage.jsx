import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {API} from "../../../../shared/services/api";
import {Carousel} from "primereact/carousel";
import "./BookingDoneDetailPage.scss";
import {UsersNavBar} from "../../shared/UsersNavBar/UsersNavBar";

export default function BookingDoneDetailPage() {

    const id = useParams().id;
    const google = window.google;
    const [booking, setBooking] = useState(null);
    const guardian = booking ? booking.guardian : null

    useEffect(() => {
        API.get('bookings/booking/' + id).then(res => {
            setBooking(res.data);

pintarMapa(res.data.guardian)
        })
    }, []);

    console.log(booking);

    function pintarMapa(guardian) {
        const lat = guardian.geoLocation[0]
        const lng = guardian.geoLocation[1];
        let myLatLng = {lat: lat, lng: lng};
        const map = new google.maps.Map(document.getElementById("map"), {
            center: myLatLng,
            zoom: 13,
            mapTypeId: "roadmap",
        });

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(myLatLng),
            map: map,
            title: 'Prueba',
        });
    }


    const itemTemplate = (image) => {
        return (
            <div className="fotodelacasa">
                <img src={image}></img>
            </div>
        )
    }

    if (!guardian) {
        return <p>loading</p>
    }



    return (
        <div>
            <div>
                <Carousel value={guardian.images} itemTemplate={itemTemplate}/>
            </div>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <h5>El Hall de {guardian.name}</h5>
                        <p>{guardian.location}</p>
                    </div>
                    <div className="col-4">
                        <img className="fotoguardian" src={guardian.personalImage}/>
                    </div>
                </div>
            </div>

            <div>
                <h5>Ubicación</h5>
                {/*Espacion para pintar el mapa*/}
                <div>
                    <div id="map" className="map"></div>
                </div>
                <br/>
                <div className="reservas">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <h5>Llegada</h5>
                                <p>{new Date(booking.initialDate).toLocaleDateString()}</p>
                            </div>
                            <div className="col-4">
                                <h5>Recogida</h5>
                                <p>{new Date(booking.finalDate).toLocaleDateString()}</p>
                            </div>
                            <div className="col-4">
                                <h5>Equipaje</h5>
                                <p>{booking.nSuitcases} Equipajes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <h5>Normas de {guardian.name}</h5>
                <h5>Cómo debe ser tu maleta</h5>
                <div className="separator"></div>
                <h5>Codigo de reserva</h5>
                <p>{booking._id}</p>
                <div className="separator"></div>
                <h5>Coste total</h5>
                <p>{booking.price} €</p>
                <hp>Desglose</hp>
                <div className="separator"></div>
                <h5>¿Necesitas Ayuda?</h5>
                <br/>
                <div className="separator"></div>
                <br/>
            </div>

            <UsersNavBar/>
        </div>
    )
}
