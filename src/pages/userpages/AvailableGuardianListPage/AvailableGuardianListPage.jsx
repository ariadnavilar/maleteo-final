import React, {useState, useEffect} from "react";
import Location from "./components/Location/Location";
import { API} from "../../../shared/services/api";
import { Carousel } from "primereact/carousel";
import { Link} from "react-router-dom";

export default function AvailableGuardianListPage() {

    const [guardians, setGuardians] = useState([]);

    useEffect(() => {
        API.get('users/guardianes').then(res =>
        setGuardians(res.data)
        )}, [])

    const itemTemplate = (guardian) =>{
        return  (
                <div>
                <Link to={"/selectedguardian" + guardian._id}>
                    <img src={guardian.personalImage}/>
                    <span>{guardian._id}</span>
                </Link>
                </div>
        )
    }

    return (
                    <div>
                        <Location/>
                        <Carousel value={guardians} itemTemplate={itemTemplate}></Carousel>
                    </div>
    )
}
