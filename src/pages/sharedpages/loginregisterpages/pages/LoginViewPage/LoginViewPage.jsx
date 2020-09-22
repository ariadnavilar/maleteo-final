import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../../../shared/services/api";

export default function LoginViewPage(){

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = formData => {
        API.post("users/login", formData).then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user))
        })

    }

    return(

        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email">Dirección de correo electrónico</label>
                <input type="text" name="email" ref={register ({required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                {errors.email && <span> Email incorrecto</span>}

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" ref={register ({required:true , minLength:8})}/>
                {errors.password && <span> Contraseña incorrecta</span>}

                <input type="submit" value="Iniciar sesión"/>

            </form>
        </div>
    );
}
