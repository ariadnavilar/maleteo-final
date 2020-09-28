import React from 'react';
import "./UsersNavBar.scss";
import {Link} from "react-router-dom";

export function UsersNavBar() {
    return (

        <div className="navbar-general">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Link to="/"><i className="pi pi-home"/></Link>
                    </div>
                    <div className="col-3">
                        <Link to="/guardiansearch"><i className="pi pi-search"/></Link>
                    </div>
                    <div className="col-3">
                        <i className="pi pi-comments"/>
                    </div>
                    <div className="col-3"><i className="pi pi-user"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

