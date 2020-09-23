import React from "react";
import { useForm } from "react-hook-form";
import "../loginregisterstyles.scss";
import "../../../../../shared/components/Buttons/buttons.scss";
import { API } from "../../../../../shared/services/api";
import LoginRegisterNavBar from "../../shared/components/LoginRegisterNavBar/LoginRegisterNavBar";

export default function RegisterViewPage(){

    const { register, handleSubmit, errors } = useForm();

        const onSubmit = formData => {
        API.post('users/register', formData).then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user))
        })
    }

    return(

        <div>
            <button className="containerarrow">
                <i className="pi pi-chevron-left gobackbtn" ></i>
            </button>
            <LoginRegisterNavBar/>
            <h2>Únete a Maleteo y disfruta de sus ventajas</h2>
            <button type="button" className="fbbtn">Facebook</button>
            <button type="button" className="googlebtn">Google</button>
            <p className="text">o utiliza tu correo electrónico</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email">Dirección de correo electrónico</label>
                <input type="text" name="email" placeholder="carlosrodriguez@gmail.com" ref={register ({required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                {errors.email && <span>Introduce un e-mail válido</span>}

                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" placeholder="Carlos" ref={register ({required:true, pattern: /^[A-Za-z]$/})}/>
                {errors.name && <span>Introduce un nombre válido (sólo puede contener letras)</span>}

                <label htmlFor="surname">Apellido</label>
                <input type="text" name="surname" placeholder="Rodríguez" ref={register ({required:true, pattern: /^[A-Za-z]$/})}/>
                {errors.surname && <span>Introduce un apellido válido (sólo puede contener letras)</span>}

                <label htmlFor="birthdate">Fecha de nacimiento</label>
                <input type="date" name="birthdate" ref={register ({required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                {errors.birthdate && <span>Tienes que ser mayor de edad para registrarte</span>}

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" placeholder="*********" ref={register ({required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}/>
                {errors.password && <span>Tu contraseña debe contener al menos 8 caracteres</span>}

                <div className="centered">
                    <input className="orangebtn" type="submit" value="Registrarse"/>
                </div>

            </form>
        </div>
    );
}
