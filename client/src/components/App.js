import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

//const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

//Router Configuration
//BrowserRouter is normal React component so we can add any component
//passed exact as true as any other route path match
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact={true} path="/" component={Landing}/>
          <Route exact path="/surveys" component={Dashboard}/>
          <Route path="/surveys/new" component={SurveyNew}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
