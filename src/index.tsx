import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store, history} from "./store";
import {Route} from "react-router-dom";
import "./index.pcss";
import {HeaderContainer} from "./Header/Header.container";
import {UserNameInputContainer} from "./UserNameInput/UserNameInput.container";
import {UserContainer} from "./User/User.container";
import {ConnectedRouter} from "connected-react-router";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <HeaderContainer/>
                <div className="content">
                    <div className="content__wrapper">
                        <Route path="/" exact={true} component={UserNameInputContainer}/>
                        <Route path="/user/:userName" exact={true} component={UserContainer}/>
                    </div>
                </div>
            </>
        </ConnectedRouter>

    </Provider>,
    document.getElementById("root") as HTMLElement
);
