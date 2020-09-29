import React, {useState, useEffect} from "react";
import { API } from "../../../shared/services/api";
import {Link, useHistory} from "react-router-dom";
import "./ProfilePage.scss";
import Modal from 'react-modal';
import {UsersNavBar} from "../shared/UsersNavBar/UsersNavBar";

export default function ProfilePage(props) {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [bookings, setBookings] = useState([]);

    const email = user.email;

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        props.setIsLogged(false);
        history.push('/login');
    }

    const guardianRegister = () =>
        history.push('/guardianregister');

    const editProfile = () =>
        history.push('/profile/edit');

    useEffect(() => {
        API.get('bookings/' + email).then(res =>
        setBookings(res.data)
    )}, [])

    return (
        <div className="margintop">
            <h1>¡Hola {user.name}!</h1>
            <div>
                <button className="whitebtn sm" onClick={()=>setModalIsOpen(true)}><span className="pi pi-calendar orangeicons"></span> Tus reservas</button>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div className="closewindow">
                    <button className="closebtn" onClick={()=>setModalIsOpen(false)}><span className="pi pi-times completed"></span></button>
                </div>
                <h3>Tus reservas</h3>
                {bookings && <div>
                    {bookings.map((booking, i) =>
                        <div>
                            <h5>Reserva nº{1+i++}</h5>
                            <p>{booking.initialDate}</p>
                            <p>{booking.finalDate}</p>
                            <p>Tu guardián es {booking.guardian.name}</p>
                            <Link to="/reserva/:id">Detalles de la reserva</Link>
                        </div>
                        )}
                </div>}
            </Modal>
            <div>
                <button className="whitebtn sm" onClick={guardianRegister}><span className="pi pi-star-o orangeicons"></span> Registrarse como guardián</button>
            </div>
            <div>
                <button className="whitebtn sm" onClick={editProfile}><span className="pi pi-user-edit orangeicons"></span> Editar perfil</button>
            </div>
            <div className="centered">
                <button className="orangebtn endbtn" onClick={signOut}>Cerrar sesión</button>
            </div>
            <div>
                <UsersNavBar/>
            </div>
        </div>
    )
}
