import React from "react";
import "./BeAGuardianPage.scss";
import { useHistory } from "react-router-dom";
import GuardianForm from "./components/GuardianForm";

export default function BeAGuardianPage() {

    const history = useHistory();
    const closeWindow = () => {
        history.push("/profile")
    }

    return (
        <div>
            <div className="orangecontainer">
                <div className="margintop left">
                    <span onClick={closeWindow} className="pi pi-times completedright marginx"></span>
                    <div className="halfwidht">
                        <h5>Configura tu espacio en muy pocos pasos</h5>
                    </div>
                </div>
            </div>
            <div>
                <GuardianForm/>
            </div>
        </div>
    )
}
