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

    const onSubmit = formData => {
        localStorage.setItem("datasearch", JSON.stringify(formData))
        console.log(formData);
            history.push("/guardiansearch")
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="centered">
                    <span className="pi pi-search formicons"></span>
                    <input className="inputsearch" type="text" name="location" id="location"
                           placeholder="¿Dónde te encuentras? Madrid, Barcelona..." ref={register({required: true})}/>
                </div>
                <div className="row centered">
                    <input className="datesearch calendar" type="date" name="deposit" placeholder="Depósito"
                           ref={register({required: true})}/>
                    <input className="datesearch calendar" type="date" name="withdrawal" placeholder="Retirada"
                           ref={register({required: true})}/>
                </div>
                <div className="row centered">
                    <span className="pi pi-briefcase luggageicon"></span>
                    <input className="datesearch" type="number" name="luggage" placeholder="Nº de piezas"
                           ref={register({required: true})}/>

                    <input className="orangebtn sm" type="submit" value="Buscar"/>

                </div>
                {errors.location && errors.withdrawal && errors.deposit && errors.luggage &&
                <span className="warning">Introduce todos los campos necesarios</span>}
            </form>
        </div>
    )
}
