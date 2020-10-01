import React, {useState, useEffect, useCallback} from "react";
import Location from "./components/Location/Location";
import { API} from "../../../shared/services/api";
import { Carousel } from "primereact/carousel";
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

    const itemTemplate = (guardian) =>{
        return  (
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
        )
    }
console.log(activeGuardian)
    return (
                    <div>
                        <Location guardians={guardians} setActiveGuardian={setActiveGuardian}/>
                        <Carousel value={guardians} itemTemplate={itemTemplate} page={activeGuardian} onPageChange={(e) => setActiveGuardian(e.page)}></Carousel>
                        <UsersNavBar/>
                    </div>
    )
}
