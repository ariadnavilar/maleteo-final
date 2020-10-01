import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {API} from "../../../../shared/services/api";
import {Carousel} from "primereact/carousel";
import "./SelectedGuardianPage.scss"
import {UsersNavBar} from "../../shared/UsersNavBar/UsersNavBar";

export default function SelectedGuardianPage() {

    const id = useParams().id;
    const google = window.google;
    const [guardian, setGuardian] = useState([]);
    const [geoLocation, setLocation] = useState([]);

    useEffect(() => {

        API.get('users/guardianes/' + id).then(res => {
            setGuardian(res.data);
            pintarMapa(res.data);

        })
    }, []);

    function pintarMapa(guardian) {
        const lat = parseFloat(guardian.geoLocation[0]);
        const lng = parseFloat(guardian.geoLocation[1]);
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

    const saveGuardian = () => {
        let dataGuardian = {
            "id": guardian._id,
            "name": guardian.name
        }
        localStorage.setItem("dataGuardian", JSON.stringify(dataGuardian));
    }

    const itemTemplate = (image) => {
        return (
            <div>
                <img src={image} className="imgCarousel"></img>
            </div>
        )
    }


    return (
        <div>
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
                <div className="col-7">
                    <span className="pi pi-star"/>
                    <span className="pi pi-star"/>
                    <span className="pi pi-star"/>
                    <span className="pi pi-star"/>
                    <span className="pi pi-star"/>
                </div>
            </div>
            <div className="menurojo">
                <div className="container-fluid">
                    <div className="row">
                        <p>¡Rápido no le queda mucho espacio!</p>
                    </div>
                </div>
            </div>
            <div className="row margintop">
                <div className="col-2">
                    <span className="pi pi-home selectedguardianicons"></span>
                </div>
                <div className="col-10">
                    <h6>Tipo de locker</h6>
                    <p>El salón de su casa será el lugar idóneo para
                        alojar tus maletas y cuidar de ellas.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <span className="pi pi-users selectedguardianicons"></span>
                </div>
                <div className="col-10">
                    <h6>Como la patena</h6>
                    <p>19 usuarios recientes han catalogado su
                        espacio como muy limpio.</p>
                </div>
            </div>
                <div className="row">
                    <div className="col-2">
                        <span className="pi pi-chart-line selectedguardianicons"></span>
                    </div>
                    <div className="col-10">
                        <h6>Un Fortín</h6>
                        <p>El 95% de los usuarios han valorado su
                            experiéncia como muy segura.</p>
                    </div>
                </div>
            <div>
                <h5>Ubicación</h5>
                <div>
                    <div id="map" className="map"></div>
                </div>
                <h5 className="margintop">Reseñas</h5>
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
                    <div className="row">
                        <div className="col-2">
                            <img className="reseña1"
                                 src="https://cdn.pixabay.com/photo/2019/11/06/15/49/redheads-4606477_960_720.jpg"
                                 alt=""/>
                        </div>
                        <div className="col-10">
                            <h6>Patricia R</h6>
                            <p>Is very nice and her space is so cozy, she also
                                showed us the best places to go for tapas in Madrid. Thank you so much.</p>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-2">
                            <img className="reseña1"
                                 src="https://cdn.pixabay.com/photo/2017/06/26/02/47/people-2442565_960_720.jpg"
                                 alt=""/>
                        </div>
                        <div className="col-10">
                            <h6>Juan P</h6>
                            <p>responde rápido y estuvo muy atenta. Nos dió
                                muchos consejos sobre Madrid y pudimos hacer turismo tranquilamente. Su ubicación nos
                                vino
                                genial.</p>
                        </div>
                    </div>
                </div>
                <div className="centered">
                    <Link to="/prebooking">
                        <button className="orangebtn booknowbtn" onClick={saveGuardian}>Reservar Ahora</button>
                    </Link>
                </div>
                <UsersNavBar/>
            </div>
        </div>
    )
}
