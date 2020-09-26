import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { API} from "../../../../shared/services/api";
import { Carousel } from "primereact/carousel";
export default function SelectedGuardianPage() {

    const id = useParams().id;
     const google = window.google;
    const [guardian, setGuardian] = useState([]);
    useEffect(() => {
       
        API.get('users/guardianes/' + id).then(res =>
            setGuardian(res.data))


    }, []);

            // const lng = guardian.geoLocation[1];
            // let myLatLng = {lat: lat, lng: lng};
            // const map = new google.maps.Map(document.getElementById("map"), {
            //     center: myLatLng,
            //     zoom: 13,
            //     mapTypeId: "roadmap",
            // });
    
    
            // let marker = new google.maps.Marker({
            //     position: new google.maps.LatLng(myLatLng),
            //     map: map,
            //     title: 'Prueba',
            // });
            
    const itemTemplate = (image) =>{
        return  (
            <div>
                <img src={image}></img>
            </div>
        )
    }

    return (
        <div>
            <div>
            <Carousel value={guardian.images} itemTemplate={itemTemplate}/>
                    
            </div>
            <div>
            <h1>SELECTED GUARDIAN</h1>
            <p>El Hall de {guardian.name}</p>
            <p>{guardian.location}</p>
            <img src={guardian.personalImage}/>
            </div>

            <div>
                <div id="map" className="map">

                </div>
            </div>
        </div>
    )
}