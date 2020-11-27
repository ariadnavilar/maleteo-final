import React, {useState, useEffect, useCallback} from "react";
import Location from "./components/Location/Location";
import { API} from "../../../shared/services/api";
import Carousel from 'react-bootstrap/Carousel'
import { Link} from "react-router-dom";
import "./AvailableGuardianListPage.scss";
import {UsersNavBar} from "../shared/UsersNavBar/UsersNavBar";
import "../shared/UsersNavBar/UsersNavBar.scss"


export default function AvailableGuardianListPage() {

    const [guardians, setGuardians] = useState([]);
    const [activeGuardian, setActiveGuardian] = useState(0);

    useEffect(() => {
        API.get('users/guardianes').then(res =>
        setGuardians(res.data)
        )},
         [])

    const handleSelect = (selectedIndex, e) => {
            setActiveGuardian(selectedIndex);
          };

    return (
                    <div className="result">
                            <Location guardians={guardians} setActiveGuardian={setActiveGuardian}/>
                            <Carousel activeIndex={activeGuardian} onSelect={handleSelect} interval={500000000}>
                                {guardians.map((guardian,i)=>

                                    <Carousel.Item>
                                        <div className="p-carousel-content guardian-list">
                                            <Link to={"/selectedguardian/" + guardian._id}>
                                                <div className="row guardian-slide">
                                                    <div className="inlinediv col-6">
                                                        <img className="result__home-img" src={guardian.images[0]}/>
                                                    </div>
                                                    <div className="inlinediv col-6">
                                                        <p className="result__info">{guardian.name} {guardian.surname}</p>
                                                        <img className="result__guardian-img" src={guardian.personalImage}/>
                                                        <p className="result__info location-text"><span className="pi pi-map-marker"></span>
                                                            {guardian.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        <UsersNavBar/>
                    </div>
    )
}
