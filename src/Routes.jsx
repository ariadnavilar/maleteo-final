import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegisterViewPage from "./pages/sharedpages/loginregisterpages/pages/RegisterViewPage/RegisterViewPage";
import SelectedGuardianPage from "./pages/userpages/bookinggroup/SelectedGuardianPage/SelectedGuardianPage";
import HomePage from "./pages/sharedpages/HomePage/HomePage";
import LoginViewPage from "./pages/sharedpages/loginregisterpages/pages/LoginViewPage/LoginViewPage";
import FindYourGuardianPage from "./pages/userpages/FindYourGuardianPage/FindYourGuardianPage";
import BookingCompletedPage from "./pages/userpages/bookinggroup/BookingCompletedPage/BookingCompletedPage";
import AvailableGuardianListPage from "./pages/userpages/AvailableGuardianListPage/AvailableGuardianListPage";
import ProfilePage from "./pages/userpages/ProfilePage/ProfilePage";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute"
import FirstWelcomePage from "./pages/sharedpages/FirstWelcomePage/FirstWelcomePage";

function Routes() {

    const [isLogged, setIsLogged] = useState(!!localStorage.getItem('token'));

    return (
        <Router>
            <Switch>
                <Route path='/register'><RegisterViewPage/></Route>
                <Route path='/login'><LoginViewPage isLogged={isLogged} setIsLogged={setIsLogged}/></Route>
                <PrivateRoute path='/findguardian'><FindYourGuardianPage/></PrivateRoute>
                <PrivateRoute path='/guardiansearch'><AvailableGuardianListPage/></PrivateRoute>
                <PrivateRoute path='/selectedguardian'><SelectedGuardianPage/></PrivateRoute>
                <PrivateRoute path='/selectedguardian/:id'><SelectedGuardianPage/></PrivateRoute>
                <PrivateRoute path='/completedbooking'><BookingCompletedPage/></PrivateRoute>
                <PrivateRoute path='/profile'><ProfilePage  isLogged={isLogged} setIsLogged={setIsLogged}/></PrivateRoute>
                <Route path='/home'><HomePage/></Route>
                <Route path='/firstpage'><FirstWelcomePage/></Route>

            </Switch>
        </Router>
    );
}

export default Routes;
