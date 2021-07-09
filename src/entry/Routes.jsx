import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import OAuth2Handler from './OAuth2Handler';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/oauth2/resolve" component={OAuth2Handler} />
        </Switch>
    )
}

export default Routes;