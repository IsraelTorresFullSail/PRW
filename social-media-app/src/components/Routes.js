import React from 'react';
//React Router
import { Route, Switch } from 'react-router-dom'
import NewsFeed from '../pages/NewsFeed'
import Messages from '../pages/Messages'
import Watch from '../pages/Watch'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={NewsFeed} />
                <Route exact path='/NewsFeed' component={NewsFeed} />
                <Route exact path='/Messages' component={Messages} />
                <Route exact path='/Watch' component={Watch} />
            </Switch>
        </div>
    );
}

export default Routes;