import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import './HomePage.scss';

export default function HomePage() {

    const history = useHistory();

    useEffect(() => {
        let timer = setTimeout(() => history.push('./firstpage'), 1500);
        return () => {
            clearTimeout(timer);
        }
    }, [history])

    return (
        <div className='home__background'>
                <div className="home__logo">
                    <img className="home__luggage" src={require("./assets/img/maleta@3x.png")}/>
                    <img className="home__title" src={require("./assets/img/maleteo@3x.png")}/>
                </div>
        </div>
    )
}
