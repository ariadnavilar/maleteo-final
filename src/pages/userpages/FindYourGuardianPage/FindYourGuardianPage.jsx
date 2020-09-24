import React from "react";
import "./FindYourGuardianPage.scss"
import News from "./components/News/News";
import Experiences from "./components/Experiences/Experiences";
import Form from "./components/Form/Form";

export default function FindYourGuardianPage() {
    return (
        <div>
            <h2 className="findguardian">Encuentra tu guardián</h2>
            <Form/>
            <News/>
            <Experiences/>
        </div>
    )
}
