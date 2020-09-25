import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link,
    Redirect
} from "react-router-dom";
import "../../../../../shared/components/Buttons/buttons.scss";
import "./Location.scss"

export default function Location(props) {

    const google = window.google;


    const guardians = props.guardians;

   

    useEffect(() => {
        const geo = JSON.parse(localStorage.getItem("dataLocation"));
        const lat = geo.location.lat;
        const lng = geo.location.lng;
        let myLatLng = {lat: lat, lng: lng};

        
        const map = new google.maps.Map(document.getElementById("map"), {
            center: myLatLng,
            zoom: 13,
            mapTypeId: "roadmap",
        });


        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(myLatLng),
            map: map,
            title: 'Prueba',
        });

        for (const guardian of guardians) {

           const lat = guardian.geoLocation[0];
           const lng = guardian.geoLocation[1];

           var image = {
            url: guardian.personalImage,
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32),
            scaledSize: new google.maps.Size(20,20)

          };

           let marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            title: guardian.name,
            icon: image,
        });
        marker.setMap(map);

        }
      

    }, [guardians])



    return (
        <div>
            <div className="map" id="map">

            </div>
        </div>
    )
}
