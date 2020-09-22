import React from "react";
import { useForm } from "react-hook-form";

export default function LoginViewPage(){

    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = data => {console.log(data);reset()};

    return(

        <div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email">Dirección de correo electrónico</label>
                <input type="text" name="email" ref={register ({required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                {errors.email && <span> Email incorrecto</span>}

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" ref={register ({required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}/>
                {errors.password && <span>Contraseña incorrecta</span>}

                <input type="submit" value="Iniciar sesión"/>

            </form>
        </div>
    );
}
