import React from "react";
import {useHistory} from "react-router-dom";
import "./Profile.scss";


export default function ProfilePage(props) {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        props.setIsLogged(false);
        history.push('/login');
    }

    return (
        <div className="margintop">
            <h1>¡Hola {user.name}!</h1>
            <ul>
                <li>
                    Mensajes
                </li>
                <li>
                    Reservas
                </li>
            </ul>
            <div className="centered">
                <button className="orangebtn endbtn" onClick={signOut}>Cerrar sesión</button>
            </div>
        </div>
    )
}
