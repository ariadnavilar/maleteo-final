import React, {useEffect, useRef} from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../../shared/services/api";
import { useHistory } from "react-router-dom";
import {UsersNavBar} from "../../../userpages/shared/UsersNavBar/UsersNavBar";

export default function GuardianForm() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const google = window.google;
    const formDOM = useRef(null);

    const id = user.id;

    useEffect(() => {
        const input = document.getElementById("location");
        const searchBox = new google.maps.places.SearchBox(input);

        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
            localStorage.setItem("dataGuardian", JSON.stringify(places[0].geometry));
        })
    }, [])


    const onSubmit = event => {
        event.preventDefault();
        const dataGuardian = JSON.parse(localStorage.getItem('dataGuardian'));
        const formData = new FormData(formDOM.current);
        formData.append('geoLocation[]', dataGuardian.location.lat);
        formData.append('geoLocation[]', dataGuardian.location.lng);
        API.put('users/changeGuardian/' + id, formData).then(res => {
            console.log('Guardián registrado');
        })
    }

    return (
        <div className="margintop">
            <h5>¿Dónde está tu espacio?</h5>
            <form onSubmit={onSubmit} ref={formDOM}>

                <input type="file" name="images" multiple/>

                <label htmlFor="location">Ubicación</label>
                <input type="text" name="location" id="location" placeholder="Ej. Calle Alcalá, 58 (Madrid, España)" ref={register ({required:true})}/>

                {/* ---------MÁS INPUTS PARA SER GUARDIÁN SI QUEREMOS MODIFICAR LA BBDD-------------------------------------------------

                <label htmlFor="title">Título</label>
                <input type="text" name="location" placeholder="El hall de Daniel" ref={register ({required:true})}/>
                {errors.title && <span className="warning">Introduce un título para tu espacio</span>}

                <label htmlFor="services">Servicios</label>
                <input type="text" name="services" placeholder="Ej. Piso con alarma, armario con llave" ref={register ({required:true})}/>

                <label htmlFor="pictures">Fotos</label>
                <input type="file" name="pictures" placeholder="Fotos" ref={register ({required:true})}/>
                {errors.pictures && <span className="warning">Añade al menos una fotografía</span>}*/}

                <div className="centered">
                    <input className="orangebtn" type="submit" value="Registrarse"/>
                </div>
            </form>
            <UsersNavBar/>
        </div>
    )
}
