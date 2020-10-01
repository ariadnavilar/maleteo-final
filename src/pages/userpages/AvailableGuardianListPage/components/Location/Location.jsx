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

            // <--------este código es para poner imágenes en vez de iconos en los Markers----------->
            /*var image = {
             src: 'https://e1.pngegg.com/pngimages/849/822/png-clipart-recursos-orange-g-logo-thumbnail.png',
             // This marker is 20 pixels wide by 32 pixels high.
             size: new google.maps.Size(100, 52),
             // The origin for this image is (0, 0).
             origin: new google.maps.Point(0, 0),
             // The anchor for this image is the base of the flagpole at (0, 32).
             anchor: new google.maps.Point(0, 32),
             scaledSize: new google.maps.Size(40,40)

           };*/

            let iconBase = 'https://maps.google.com/mapfiles/kml/paddle/';
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                title: guardian.name,
                icon: iconBase + 'orange-stars_maps.png'
            });
            marker.setMap(map);

        }

/*        INTENTO AÑADIR FUNCIÓN PARA CLICKAR EN MARKER Y Q ME HAGA ZOOM, no me sale :'D

            marker.addListener('click', function () {
            map.setZoom(8);
            map.setCenter(marker.getPosition());
        });*/

    }, [guardians])

    return (
        <div>
            <div className="map" id="map">
            </div>
        </div>
    )
}
