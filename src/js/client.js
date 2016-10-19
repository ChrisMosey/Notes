import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {Provider, connect} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import Reducer from './components/Reducer';

import Layout from './components/Layout';
import ViewNotes from './pages/ViewNotes';
import NewNote from './pages/NewNote';


const middleware = applyMiddleware(promise(), thunk);
const store = createStore(Reducer, middleware);

const app = document.getElementById('app');

ReactDom.render(
    
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={ViewNotes}></IndexRoute>
                <Route path='newnote' component={NewNote} ></Route>
            </Route>
        </Router>
    </Provider>, 
app);