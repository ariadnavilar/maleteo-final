import React, {useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "./EditProfilePage.scss";
import {API} from "../../../../shared/services/api";
import {UsersNavBar} from "../../shared/UsersNavBar/UsersNavBar";
import Modal from "react-modal";
import {useForm} from "react-hook-form";

export default function EditProfilePage() {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem('user'));
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const formularioDOM = useRef(null);

    let id = user.id;

    const backToProfile = () =>
        history.push("/profile");

    const onSubmit = event => {
        const formmanoli = document.getElementById('formmanoli');
        const formData = new FormData(formmanoli)
        event.preventDefault();
        API.put('users/update/' + id, formData).then(res => {
            console.log('Datos actualizados');
        })
        /*const data = {
            name: formData.name,
            surname: formData.surname,
            email: user.email,
            birthdate: (formData.birthdate ? formData.birthdate : user.birthdate),
            id: user.id,
            logged: user.logged
        }

        localStorage.setItem('user', JSON.stringify(data));
        setModalIsOpen(false);*/
    }

    return (
        <div className="margintop">
            <span onClick={backToProfile} className="pi pi-chevron-left completedleft"></span>
            <h5 className="margintop">Datos del perfil</h5>
            <p className="margintop">
                <span className="pi pi-user smicons">
                </span>
                {user.name} {user.surname}
            </p>
            <p>
                <span className="pi pi-envelope smicons">
                </span>{user.email}
            </p>
            <p>
                <span className="pi pi-calendar smicons">
                </span>
                {user.birthdate}
            </p>

            <div className="centered">
                <button className="whitebtn" onClick={()=>setModalIsOpen(true)}>
                    <span className="pi pi-pencil smicons">
                    </span>Modificar datos</button>
            </div>

            {/*-----------------formulario de put dentro de la modal--------------------*/}
            <Modal isOpen={modalIsOpen}>

                <div className="closewindow">
                    <button className="closebtn" onClick={()=>setModalIsOpen(false)}><span className="pi pi-times completed"></span></button>
                </div>

                <h4>Modifica tus datos</h4>

                <form encType="multipart/form-data" onSubmit={onSubmit} id="formmanoli">

                    <input type="file" name="avatar"/>

                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" placeholder={user.name} defaultValue={user.name}/>

                    <label htmlFor="surname">Apellidos</label>
                    <input type="text" name="surname" placeholder={user.surname} defaultValue={user.surname}/>

                    <label htmlFor="birthdate">Fecha de nacimiento</label>
                    <input type="date" name="birthdate" placeholder={user.birthdate} defaultValue={user.birthdate}/>

                    <div className="centered">
                        <button className="whitebtn modalbtn" type="submit" value="Guardar cambios">enviar</button>
                    </div>

                </form>

            </Modal>
            <UsersNavBar/>
        </div>
    )
}
