import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {API} from "../../../../shared/services/api";
import {Carousel} from "primereact/carousel";
import "./SelectedGuardianPage.scss"

export default function SelectedGuardianPage() {

    const id = useParams().id;
    const google = window.google;
    const [guardian, setGuardian] = useState([]);
    const [geoLocation, setLocation] = useState([]);

    useEffect(() => {

        API.get('users/guardianes/' + id).then(res =>{
            
            setLocation(res.data.geoLocation);
            setGuardian(res.data);

       })

    },[]);

    function crearMapa(){

    const lat = geoLocation[0];
    const lng = geoLocation[1];

    console.log(geoLocation);

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

//     const lat = geoLocation[0];
//     const lng = geoLocation[1];
//     let myLatLng = {lat: lat, lng: lng};
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: myLatLng,
//         zoom: 13,
//         mapTypeId: "roadmap",
//     });

    // let marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(myLatLng),
    //     map: map,
    //     title: 'Prueba',
    // });

    const itemTemplate = (image) => {
        return (
            <div>
                <img src={image}></img>
            </div>
        )
    }
  

    return (
        <div>
            <div>
                <Carousel value={guardian.images} itemTemplate={itemTemplate}/>
            </div>
            <p></p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <h4>El Hall de {guardian.name}</h4>
                        <h6>{guardian.location}</h6>
                    </div>
                    <div className="col-4">
                        <img className="fotoguardian" src={guardian.personalImage}/>
                    </div>
                </div>
            </div>

            <div className="estrellas">
                <i className="pi pi-star" style={{'color': 'yellow'}}></i>
                <i className="pi pi-star" style={{'color': 'yellow'}}></i>
                <i className="pi pi-star" style={{'color': 'yellow'}}></i>
                <i className="pi pi-star" style={{'color': 'yellow'}}></i>
                <i className="pi pi-star" style={{'color': 'yellow'}}></i>
            </div>
            <p></p>
            <p style={{'color': 'red', 'fontSize': '9px',}}>¡Rápido no le queda mucho espacio! <i className="pi pi-briefcase
" style={{'fontSize': '1.5em', 'color': '#FF9B33'}}></i></p>
            <p></p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <i className="pi pi-home" style={{'fontSize': '2em', 'color': '#FF9B33'}}></i>
                    </div>
                    <div className="col-10">
                        <h6>Tipo de locker</h6>
                        <p>El salón de su casa será el lugar idóneo para
                            alojar tus maletas y cuidar de ellas.</p>
                    </div>
                </div>
                <p></p>
                <div className="row">
                    <div className="col-2">
                        <i className="pi pi-users" style={{'fontSize': '2em', 'color': '#FF9B33'}}></i>
                    </div>
                    <div className="col-10">
                        <h6>Como la patena</h6>
                        <p>19 usuarios recientes han catalogado su
                            espacio como muy limpio.</p>
                    </div>
                </div>
                <p></p>
                <div className="row">
                    <div className="col-2">
                        <i className="pi pi-chart-line" style={{'fontSize': '2em', 'color': '#FF9B33'}}></i>
                    </div>
                    <div className="col-10">
                        <h6>Un Fortín</h6>
                        <p>El 95% de los usuarios han valorado su
                            experiéncia como muy segura.</p>
                    </div>
                </div>
                <p></p>
            </div>

            {/*Espacion para pintar el mapa*/}
            <div>
                <div id="map" className="map"></div>
            </div>
            {/*espacio de reseñas he puestos los nombres inventados, Aleatorios*/}
            <p></p>
            <h5>Reseñas</h5>
            <p></p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <img className="reseña1"
                             src="https://images.freeimages.com/images/large-previews/023/young-woman-6-1434119.jpg"
                             alt=""/>
                    </div>
                    <div className="col-10">
                        <h6>Ana Maria S</h6>
                        <p>El hall es acogedor y super chulo, muy limpio, Marta nos ayudó a subir las maletas y nos
                            transmitió
                            muchísima seguridad.</p>
                    </div>
                </div>
                <p></p>
                <div className="row">
                    <div className="col-2">
                        <img className="reseña1"
                             src="https://cdn.pixabay.com/photo/2019/11/06/15/49/redheads-4606477_960_720.jpg" alt=""/>
                    </div>
                    <div className="col-10">
                        <h6>Patricia R</h6>
                        <p>Is very nice and her space is so cozy, she also
                            showed us the best places to go for tapas in Madrid. Thank you so much.</p>
                    </div>
                </div>
                <p></p>
                <div className="row">
                    <div className="col-2">
                        <img className="reseña1"
                             src="https://cdn.pixabay.com/photo/2017/06/26/02/47/people-2442565_960_720.jpg" alt=""/>
                    </div>
                    <div className="col-10">
                        <h6>Juan P</h6>
                        <p>Marta responde rápido y estuvo muy atenta. Nos dió
                            muchos consejos sobre Madrid y pudimos hacer turismo tranquilamente. Su ubicación nos vino
                            genial.</p>
                    </div>
                </div>
                <p></p>
            </div>

            <h5>Normas de {guardian.name}</h5>

            <p>Cómo debe ser tu maleta</p>

            <p>Tipo de cancelación de reserva</p>

            <p>Contactar con tu guardián</p>

            <p>Denunciar anuncio</p>

            <p>Otros lockers cerca de ti</p>


            <button className="botonreserva">Reservar Ahora</button>
        </div>
    )
}
