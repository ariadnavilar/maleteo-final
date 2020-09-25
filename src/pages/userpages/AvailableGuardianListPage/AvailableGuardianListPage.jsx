import React, {useState, useEffect} from "react";
import Location from "./components/Location/Location";
import { API} from "../../../shared/services/api";
import { Carousel } from "primereact/carousel";
import { Link} from "react-router-dom";
import "./AvailableGuardianListPage.scss";

export default function AvailableGuardianListPage() {

    const [guardians, setGuardians] = useState([]);

    useEffect(() => {
        API.get('users/guardianes').then(res =>
        setGuardians(res.data)
        )}, [])

    const itemTemplate = (guardian) =>{
        return  (
            <div className="p-carousel-content">
                <Link to={"/selectedguardian/" + guardian._id}>
                    <div className="row guardianslide">
                        <div className="inlinediv col-6">
                            <img className="homeimg" src={guardian.images[0]}/>
                        </div>
                        <div className="inlindediv col-6">
                            <p className="textinfo">{guardian.name} {guardian.surname}</p>
                            <img className="personalimg" src={guardian.personalImage}/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
                    <div>
                        <Location guardians={guardians}/>
                        <Carousel value={guardians} itemTemplate={itemTemplate}></Carousel>
                    </div>
    )
}
