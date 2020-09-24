import React from "react";
import "../News/News.scss";

export default function Experiences() {
    return (
        <div>
            <h2>Experiencias</h2>
            <div className="centered">
                <img className="blogimg" src="https://www.65ymas.com/uploads/s1/41/41/64/costa-brava.jpeg"/>
            </div>
            <h4>Conoce la costa brava</h4>
            <p>Después de los meses que hemos estado encerrados, seguro que a todos nos apetece hacer alguna escapada, siempre tomando todas las medidas de seguridad necesarias</p>
            <div className="centered">
                <input className="whitebtn" type="submit" value="Mostrar más"/>
            </div>
        </div>
    )
}
