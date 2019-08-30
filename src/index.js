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
                <Route path="/posts" component={Posts}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/" component={Home}/>
                <Route render={()=> <h3>OOPS!! Page not found</h3>} />
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


