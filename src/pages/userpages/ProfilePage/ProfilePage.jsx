import React, {useState, useEffect} from "react";
import {API} from "../../../shared/services/api";
import {Link, useHistory} from "react-router-dom";
import "./ProfilePage.scss";
import Modal from 'react-modal';
import {UsersNavBar} from "../shared/UsersNavBar/UsersNavBar";

export default function ProfilePage(props) {

    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [selectedBookingId, setSelectedBookingId] = useState([]);

    const email = user.email;

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        props.setIsLogged(false);
        history.push('/login');
    }

    const apiGet = () => {

        API.get('bookings/' + email).then(res => {
            setBookings(res.data)
        })
    }
    const guardianRegister = () =>
        history.push('/guardianregister');

    const editProfile = () =>
        history.push('/profile/edit');

    useEffect(() => {

        apiGet();
    }, []);

    const modalDelete = (id) => {

        setSecondModalIsOpen(true);
        setSelectedBookingId(id);

    }

    const deleteBooking = (id) => {
        API.delete('bookings/booking/delete/' + id).then(res =>
                console.log('Reserva eliminada'),
            apiGet()
        )
        setSecondModalIsOpen(false);
    }

    return (
        <div className="margintop">
            <h1>¡Hola {user.name}!</h1>
            <div>
                <button className="whitebtn sm" onClick={() => setModalIsOpen(true)}><span
                    className="pi pi-calendar profile__orange-icon"></span> Tus reservas
                </button>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div className="closewindow">
                    <button className="modal__close-btn" onClick={() => setModalIsOpen(false)}><span
                        className="pi pi-times completed"></span></button>
                </div>
                <h3 className="modal__title">Tus reservas</h3>
                {bookings && <div>
                    {bookings.map((booking, i) =>
                        <div className="modal__booking row">
                            <div className="col-9">
                                <h5>Reserva {1 + i++}</h5>
                                <p className="modal__text">{new Date(booking.initialDate).toLocaleDateString()} - {new Date(booking.finalDate).toLocaleDateString()}</p>
                                <p className="modal__text">Tu guardián es {booking.guardian.name}</p>
                                <Link to={"/bookings/" + booking._id}>Detalles de la reserva</Link>
                            </div>
                            <div className="col-3">
                                <img className="modal__img" src={booking.guardian.personalImage}/>
                                <span onClick={() => modalDelete(booking._id)}
                                      className="pi pi-trash modal__delete-btn"></span>
                                <Modal className="modal-confirm" isOpen={secondModalIsOpen}>
                                    <p>¿Seguro que quieres eliminar la reserva?</p>
                                    <div className="row justify-content-center align-items-center">
                                        <button onClick={() => setSecondModalIsOpen(false)}
                                                className="whitebtn confirm col-6">No
                                        </button>
                                        <button onClick={() => deleteBooking(selectedBookingId)}
                                                className="whitebtn confirm col-6">Sí
                                        </button>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    )}
                </div>}
            </Modal>
            <div>
                <button className="whitebtn sm" onClick={guardianRegister}><span
                    className="pi pi-star-o profile__orange-icon"></span>Registrarse como guardián
                </button>
            </div>
            <div>
                <button className="whitebtn sm" onClick={editProfile}><span
                    className="pi pi-user-edit profile__orange-icon"></span> Editar perfil
                </button>
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
