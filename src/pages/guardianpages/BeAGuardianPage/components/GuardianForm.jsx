import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../../shared/services/api";
import { useHistory } from "react-router-dom";
import {UsersNavBar} from "../../../userpages/shared/UsersNavBar/UsersNavBar";

export default function GuardianForm() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const google = window.google;

    const id = user.id;

    useEffect(() => {
        const input = document.getElementById("location");
        const searchBox = new google.maps.places.SearchBox(input);

        searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
            localStorage.setItem("dataLocation", JSON.stringify(places[0].geometry));
        })
    }, [])

    /*
    FALTA ACABAR PARA PASAR DATALOCATION DEL LOCAL STORAGE A LA BBDD
    const geoLocation = localStorage.dataLocation.location;*/

    const onSubmit = formData => {
        API.put('/changeGuardian/' + id, formData).then(res => {
            console.log('Guardián registrado');
        })
    }

    return (
        <div className="margintop">
            <h5>¿Dónde está tu espacio?</h5>
            <form onSubmit={handleSubmit(onSubmit)}>

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
