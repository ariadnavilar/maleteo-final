import React from "react";
import "./News.scss";

export default function News() {

    const visitCosta = () => {
        window.open('https://es.costabrava.org/');
    }

    return (
        <div className="news col-12 row">
            <div className="col-sm-12 col-md-6">
                <h2>Novedades</h2>
                <img className="news__blog-img col-12" src="https://www.taranna.com/docs/viaje-a-filipinas-grupo-verano-001.jpg"/>
                <h4 className="news__blog-title">BLOG</h4>
                <span className="pi pi-globe news__blog-title globe"></span>
            </div>
            <div className="col-sm-12 col-md-6">
            <h2>Experiencias</h2>
                <div className="news__blog">
                    <img className="news__blog-img col-12" src="https://www.65ymas.com/uploads/s1/41/41/64/costa-brava.jpeg"/>
                    <h4>Conoce la costa brava</h4>
                    <p>Después de los meses que hemos estado encerrados, seguro que a todos nos apetece hacer alguna escapada, siempre tomando todas las medidas de seguridad necesarias</p>
                    <div className="centered endbutton">
                    </div>
                    <button onClick={visitCosta} className="whitebtn" type="submit" value="Mostrar más">Mostrar más</button>
                </div>
            </div>
        </div>
    )
}
