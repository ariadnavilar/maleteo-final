import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterViewPage from "./pages/sharedpages/loginregisterpages/pages/RegisterViewPage/RegisterViewPage";
import SelectedGuardianPage from "./pages/userpages/bookinggroup/SelectedGuardianPage/SelectedGuardianPage";
import HomePage from "./pages/sharedpages/HomePage/HomePage";
import LoginViewPage from "./pages/sharedpages/loginregisterpages/pages/LoginViewPage/LoginViewPage";
import FindYourGuardianPage from "./pages/userpages/FindYourGuardianPage/FindYourGuardianPage";
import BookingCompletedPage from "./pages/userpages/bookinggroup/BookingCompletedPage/BookingCompletedPage";
import AvailableGuardianListPage from "./pages/userpages/AvailableGuardianListPage/AvailableGuardianListPage";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/register'><RegisterViewPage/></Route>
                <Route path='/login'><LoginViewPage/></Route>
                <Route path='/findguardian'><FindYourGuardianPage/></Route>
                <Route path='/guardiansearch'><AvailableGuardianListPage/></Route>
                <Route path='/selectedguardian/:id'><SelectedGuardianPage/></Route>
                <Route path='/completedbooking'><BookingCompletedPage/></Route>
                <Route path='/home'><HomePage/></Route>
            </Switch>
        </Router>
    );
}

export default Routes;
