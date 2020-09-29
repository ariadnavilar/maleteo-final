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
    const [bookings, setBookings] = useState([]);

    const email = user.email;

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        props.setIsLogged(false);
        history.push('/login');
    }
    useEffect(() => {
        API.get('bookings/' + email).then(res =>
            setBookings(res.data)
        )
    }, [])
    console.log(bookings);
    console.log(bookings);
    return (
        <div className="margintop">
            <h1>¡Hola {user.name}!</h1>

            <button className="whitebtn sm" onClick={() => setModalIsOpen(true)}><span
                className="pi pi-calendar"></span> Reservas
            </button>
            <Modal isOpen={modalIsOpen}>
                <div className="closewindow">
                    <button className="closebtn" onClick={() => setModalIsOpen(false)}><span
                        className="pi pi-times completed"></span></button>
                </div>
                <h3>Tus reservas</h3>
                {bookings && <div>
                    {bookings.map((booking, i) =>
                        <div>
                            <h5>Reserva nº{1 + i++}</h5>
                            <p>{booking.initialDate}</p>
                            <p>{booking.finalDate}</p>
                            <Link to={"/BookingDoneDetailPage/" + booking.guardian._id}>Detalles de la reserva</Link>
                        </div>
                    )}
                </div>}
            </Modal>
            <div className="centered">
                <button className="orangebtn endbtn" onClick={signOut}>Cerrar sesión</button>
            </div>
            <div>
                <UsersNavBar/>
            </div>
        </div>
    )
}
