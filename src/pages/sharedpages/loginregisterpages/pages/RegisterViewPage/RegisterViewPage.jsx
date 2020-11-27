import React from "react";
import { useForm } from "react-hook-form";
import "../LoginRegisterViewPage.scss";
import "../../../../../shared/components/Buttons/buttons.scss";
import { API } from "../../../../../shared/services/api";
import LoginRegisterNavBar from "../../shared/components/LoginRegisterNavBar/LoginRegisterNavBar";
import { useHistory } from "react-router-dom";

export default function RegisterViewPage(){

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

        const onSubmit = formData => {
        API.post('users/register', formData).then(res => {
            console.log('Usuario registrado');
            history.push('/login');
        })
    }

    return(
        <div className="sign__container">
            <LoginRegisterNavBar/>
            <h2 className="text-center">Únete a Maleteo y disfruta de sus ventajas</h2>
            <div className="media__container">
                <button type="button" className="fbbtn">Facebook</button>
                <button type="button" className="googlebtn">Google</button>
            </div>
            <p className="sign__text">o utiliza tu correo electrónico</p>
            <form className="sign__form" onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email">Dirección de correo electrónico</label>
                <input type="text" name="email" placeholder="carlosrodriguez@gmail.com" ref={register ({required:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                {errors.email && <span className="sign__warning">Introduce un e-mail válido</span>}

                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" placeholder="Carlos" ref={register ({required:true})}/>
                {errors.name && <span className="sign__warning">Introduce un nombre válido (sólo puede contener letras)</span>}

                <label htmlFor="surname">Apellido</label>
                <input type="text" name="surname" placeholder="Rodríguez" ref={register ({required:true})}/>
                {errors.surname && <span className="sign__warning">Introduce un apellido válido (sólo puede contener letras)</span>}

                <label htmlFor="birthdate">Fecha de nacimiento</label>
                <input type="date" name="birthdate" ref={register ({required:true})}/>
                {errors.birthdate && <span className="sign__warning">Tienes que ser mayor de edad para registrarte</span>}

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" placeholder="*********" ref={register ({required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}/>
                {errors.password && <span className="sign__warning">Tu contraseña debe contener al menos 8 caracteres, una minúscula y una mayúscula</span>}

                <div className="sign__btn-container">
                    <input className="orangebtn" type="submit" value="Registrarse"/>
                </div>

            </form>
        </div>
    );
}
