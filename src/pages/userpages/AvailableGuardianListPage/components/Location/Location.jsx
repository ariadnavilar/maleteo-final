import React, {useEffect, useState, useCallback} from "react";
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
    const setActiveGuardian = props.setActiveGuardian;

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

        for (let i = 0; i < guardians.length; i++) {
            let guardian = guardians[i];
            const lat = guardian.geoLocation[0];
            const lng = guardian.geoLocation[1];

            let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                title: guardian.name,
                icon: iconBase + 'schools_maps.png'

            });
            marker.setMap(map);

            marker.addListener("click", () => {
                setActiveGuardian(i);
            });
        }

    }, [guardians])

    return (
            <div className="map" id="map"></div>
    )
}
