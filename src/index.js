import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';
import PostItem from './components/posts_item';

const App = () => {
    return (
        <BrowserRouter>
            <header>
                <NavLink to="/" exact activeClassName="selected">Home</NavLink><br/>
                <NavLink to="/posts" exact activeClassName="selected">Posts</NavLink><br/>
                <NavLink to="/profile" exact activeClassName="selected">Profile</NavLink>
            </header>
            <br/>
            <br/>
            <Switch>
                <Route path="/posts/:id" component={PostItem}/>
                <Route path="/posts" exact component={Posts}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


