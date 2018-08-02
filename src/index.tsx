import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.pcss';
import {HeaderContainer} from "./Header/Header.container";
import {UserNameInputContainer} from "./UserNameInput/UserNameInput.container";

const User = () => <div>User</div>;

ReactDOM.render(
    <Provider store={store}>
        <>
            <HeaderContainer/>
            <BrowserRouter>
                <div className="content">
                    <div className="content__wrapper">
                        <Route path="/" component={UserNameInputContainer}/>
                        <Route path="/user" exact component={User}/>
                    </div>
                </div>
            </BrowserRouter>
        </>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
