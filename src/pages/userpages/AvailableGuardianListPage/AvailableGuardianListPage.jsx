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
                    <div>
                        <Location guardians={guardians} setActiveGuardian={setActiveGuardian}/>
                        <Carousel activeIndex={activeGuardian} onSelect={handleSelect} interval={500000000}>
                                {guardians.map((guardian,i)=> 

                                    <Carousel.Item>
                                    <div className="p-carousel-content guardianlist">
                                        <Link to={"/selectedguardian/" + guardian._id}>
                                            <div className="row guardianslide">
                                                <div className="inlinediv col-6">
                                                    <img className="homeimg" src={guardian.images[0]}/>
                                                </div>
                                                <div className="inlindediv col-6">
                                                    <p className="textinfo">{guardian.name} {guardian.surname}</p>
                                                    <img className="personalimg" src={guardian.personalImage}/>
                                                    <p className="textinfo locationtext"><span className="pi pi-map-marker"></span>
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
