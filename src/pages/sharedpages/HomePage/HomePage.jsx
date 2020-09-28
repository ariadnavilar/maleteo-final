import React, { useEffect } from 'react';
import { useHistory } from  "react-router-dom";
import './HomePage.scss';

export default function HomePage() {

    const history = useHistory();

    useEffect(() => {
        let timer = setTimeout(() => history.push('./firstpage'),5000);
        return () => {
            clearTimeout(timer);
        }
    }, [history])

    return(
        <div className='wrapper contenedorHome'>
                <div className='logoDivhome'>
            <a href="/home">
                <div className="logohome">
                    <img className="maleta" src={require("./assets/img/maleta@3x.png")}/>
                    <img className="titulo" src={require("./assets/img/maleteo@3x.png")}/>
                </div>
            </a>
            </div>
            </div>
    )
    
}
