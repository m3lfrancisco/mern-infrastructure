import './App.css';
import {useState} from "react";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import {Route, Switch, Redirect} from "react-router-dom";
import { getUser } from '../../utilities/users-service';
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
            {user ? <>
                <NavBar user={user} setUser={setUser}/>
                <Switch>
                    <Route path="/orders/new">
                        <NewOrderPage/>
                    </Route>
                    <Route path="/orders">
                        <OrderHistoryPage/>
                    </Route>
                    <Redirect to="/orders"/>
                </Switch>
            </> : <AuthPage setUser={setUser}/>}
        </main>);
}