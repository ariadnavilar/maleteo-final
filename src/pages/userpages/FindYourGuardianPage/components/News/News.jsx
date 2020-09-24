import React, {useEffect, useState} from "react";
import axios from 'axios';
import "./News.scss";

export default function News() {

    return (
        <div>
            <h2 className="titlesection">Novedades</h2>
            <div className="centered">
                <img className="blogimg" src="https://www.taranna.com/docs/viaje-a-filipinas-grupo-verano-001.jpg"/>
                <h4 className="blogtitle">BLOG</h4>
                <span className="pi pi-globe blogtitle globe"></span>
            </div>
        </div>
    )
}
