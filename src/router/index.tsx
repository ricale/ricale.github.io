import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as pages from 'pages';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={pages.MainPage} />
        <Route path='/profile' exact component={pages.ProfilePage} />
      </Switch>
    </Router>
  )
}

export default AppRouter;
