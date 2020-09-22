import axios from "axios";

export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout:6000,
    header:{

        Accept: "aplication/json",
        "Content-Type": "aplication/json",
        "Acces-Control-Allow-Origin": "*",
        'Authorization': 'Bearer' + localStorage.getItem("token")
    }
});