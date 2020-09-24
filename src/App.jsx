import React from 'react';
import Routes from "./Routes";
import './App.css';
import LoginViewPage from './pages/sharedpages/loginregisterpages/pages/LoginViewPage/LoginViewPage';
import {UsersNavBar} from "./pages/userpages/shared/UsersNavBar/UsersNavBar";
import SelectedGuardianPage from "./pages/userpages/bookinggroup/SelectedGuardianPage/SelectedGuardianPage";



function App() {
    return (
        <div>
            <Routes/>
            <UsersNavBar UsersNavBar={UsersNavBar}/>
        </div>
    );
}

export default App;
