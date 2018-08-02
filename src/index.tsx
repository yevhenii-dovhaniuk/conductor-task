import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import App from "./App/App";
import './index.pcss';
import {Header} from "./Header/Header";

const User = () => <div>User</div>;

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header/>
            <BrowserRouter>
                <div>
                    <Route path="" component={App}/>
                    <Route path="/user" component={User}/>
                </div>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
