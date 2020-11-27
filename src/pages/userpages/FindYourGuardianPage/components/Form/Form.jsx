import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
    Redirect
} from "react-router-dom";
import "../../../../../shared/components/Buttons/buttons.scss";
import "./Form.scss";

export default function Form() {

    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const google = window.google;

    useEffect(() => {
        const input = document.getElementById("location");
        const searchBox = new google.maps.places.SearchBox(input);

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        localStorage.setItem("dataLocation", JSON.stringify(places[0].geometry));
    })
    }, [])
    const onSubmit = formData => {
        localStorage.setItem("datasearch", JSON.stringify(formData));
        history.push("/guardiansearch/");
        
    }

    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <span className="pi pi-search search-form__icons"></span>
                    <input className="search-form__location" type="text" name="location" id="location"
                           placeholder="¿Dónde te encuentras? Madrid, Barcelona..." ref={register({required: true})}/>
                </div>
                <div className="row search-form__dates__container">
                    <input className="search-form__dates entry" type="date" name="deposit" placeholder="Depósito" min="2020-10-02" max="2022-10-02"
                           ref={register({required: true})}/>
                    <input className="search-form__dates out" type="date" name="withdrawal" placeholder="Retirada" min="2020-10-03" max="2022-10-02"
                           ref={register({required: true})}/>
                </div>
                <div className="row search-form__dates__container">
                    <span className="pi pi-briefcase search-form__icons"></span>
                    <input className="search-form__dates entry luggage" type="number" name="luggage" placeholder="Nº de piezas"
                           ref={register({required: true})}/>
                    <input className="orangebtn small" type="submit" value="Buscar"/>
                </div>
                {errors.location && errors.withdrawal && errors.deposit && errors.luggage &&
                <span className="warning">Introduce todos los campos necesarios</span>}
            </form>
        </div>
    )
}
