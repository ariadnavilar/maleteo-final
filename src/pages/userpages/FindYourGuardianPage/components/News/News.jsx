import React, {useEffect, useState} from "react";
import axios from 'axios';

export default function News() {

    const [trips, setTrips] = useState([])

    useEffect(() => {
        axios.get('').then(res => {
            setTrips(res.data)
        })
    })

    return (
        <h2>Novedades</h2>
    )
}
