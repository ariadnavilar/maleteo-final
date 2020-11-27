import React from "react";
import "./FindYourGuardianPage.scss"
import News from "./components/News/News";
import Form from "./components/Form/Form";
import {UsersNavBar} from "../shared/UsersNavBar/UsersNavBar";

export default function FindYourGuardianPage() {
    return (
        <div>
            <div className="search__container">
                <h2>Encuentra tu guardián</h2>
                <Form/>
                <News/>
            </div>
            <UsersNavBar/>
        </div>
    )
}
