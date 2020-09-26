import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../../../../../shared/services/api";
import LoginRegisterNavBar from "../../shared/components/LoginRegisterNavBar/LoginRegisterNavBar";
import { useHistory } from "react-router-dom";

export default function LoginViewPage(props){

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    const onSubmit = formData => {
        API.post("users/login", formData).then(res => {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            props.setIsLogged(true);
            history.push('/findguardian');
        })
    }
    return(

        <div>
            <button className="containerarrow">
                <i className="pi pi-chevron-left gobackbtn" ></i>
            </button>
            <LoginRegisterNavBar/>
            <h2>Inicia sesión ahora</h2>
            <button type="button" className="fbbtn">Facebook</button>
            <button type="button" className="googlebtn">Google</button>
            <p className="text">o utiliza tu correo electrónico</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email">Dirección de correo electrónico</label>
                <input type="text" name="email" ref={register ({required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                {errors.email && <span> Email incorrecto</span>}

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" ref={register ({required:true , minLength:8})}/>
                {errors.password && <span> Contraseña incorrecta</span>}

                <div className="centered">
                    <input className="orangebtn" type="submit" value="Iniciar sesión"/>
                </div>
            </form>
        </div>
    );
}
