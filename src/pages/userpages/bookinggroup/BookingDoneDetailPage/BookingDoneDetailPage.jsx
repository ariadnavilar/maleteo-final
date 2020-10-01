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
    const GastosDeGestion = 2;

    useEffect(() => {
        API.get('bookings/booking/' + id).then(res => {
            setBooking(res.data);
            pintarMapa(res.data.guardian)
        })
    }, []);

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
            <div>
                <img src={image} className="imgCarousel"></img>
            </div>
        )
    }

    if (!guardian) {
        return (<div></div>)
    }
    return (
        <div className="marginbottom">
            <div>
                <Carousel value={guardian.images} itemTemplate={itemTemplate}/>
            </div>
                <div className="row margintop">
                    <div className="col-8">
                        <h5>El Hall de {guardian.name}</h5>
                        <p>{guardian.location}</p>
                    </div>
                    <div>
                        <img className="fotoguardian" src={guardian.personalImage}/>
                    </div>
                </div>
            <div>
                <h5 className="margintop">Ubicación</h5>
                <div className="mapcontainer">
                    <div id="map" className="map"></div>
                </div>
                <div className="reservas margintop">
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
                <div className="separatorbooking"></div>
                <p>Codigo de reserva</p>
                <p className="grey">{booking._id}</p>
                <div className="separatorbooking thin"></div>
                <p>Coste total</p>
                <p className="grey">{booking.price * booking.nSuitcases + GastosDeGestion} €</p>
                <div className="separatorbooking thin"></div>
                <p>¿Necesitas Ayuda?</p>
                <a className="volver" href="/profile"><span className="pi pi-arrow-circle-left"></span>  Volver</a>
            </div>
            <UsersNavBar/>
        </div>
    )
}
