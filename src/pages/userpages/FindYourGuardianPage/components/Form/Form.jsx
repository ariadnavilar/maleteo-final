import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../../../../shared/components/Buttons/buttons.scss";
import { API } from "../../../../../shared/services/api";
import "./Form.scss";

export default function Form() {

    const [guardians, setGuardians] = useState([]);

    const { register, handleSubmit, errors } = useForm();

        const onSubmit = formData => {
            API.get('guardians', formData).then(res => {
                setGuardians(res.data)
            })
        }

//guardianes seteados en guardians, habrá que filtrar por ubiaciones.

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="centered">
                    <span className="pi pi-search formicons"></span>
                    <input className="inputsearch" type="text" name="location" placeholder="¿Dónde te encuentras? Madrid, Barcelona..." ref={register ({required:true})}/>
                </div>
                <div className="row centered">
                    <input className="datesearch calendar" type="date" name="deposit" placeholder="Depósito" ref={register ({required:true})}/>
                    <input className="datesearch calendar" type="date" name="withdrawal" placeholder="Retirada" ref={register ({required:true})}/>
                </div>
                <div className="row centered">
                    <span className="pi pi-briefcase luggageicon"></span>
                    <input className="datesearch"  type="number" name="luggage" placeholder="Nº de piezas" ref={register ({required:true})}/>

                    <input className="orangebtn sm" type="submit" value="Buscar"/>
                </div>
                {errors.location && errors.withdrawal && errors.deposit && errors.luggage && <span className="warning">Introduce todos los campos necesarios</span>}
            </form>
        </div>
    )
}
