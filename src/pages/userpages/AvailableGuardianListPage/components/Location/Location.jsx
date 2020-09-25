import React, {useEffect} from "react";
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

export default function Location() {

    const google = window.google;

    useEffect(() => {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: {lat: 40.449856, lng: -3.700651},
            zoom: 13,
            mapTypeId: "roadmap",
        });
    }, [])

    return (
        <div>
            <div className="map" id="map">
            </div>
        </div>
    )
}
