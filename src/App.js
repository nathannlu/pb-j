import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';

import Landing from './components/Landing';
import HostGenius from './components/HostGenius';
import Teamtown from './components/Teamtown';

function App() {
  return (
		<HttpsRedirect>
			<Router basename={process.env.PUBLIC_URL} forceRefresh={true}>
				<div className="App relative">
						<Route exact path="/" component={Landing} />
						<Route exact path="/work/hostgenius" component={HostGenius} />
						<Route exact path="/work/teamtown" component={Teamtown} />
						{/*
						<Route exact path="/work" component={Work} />
						<Route exact path="/pricing" component={Pricing} />
						<Route exact path="/about" component={About} />
						*/}
				</div>
			</Router>
		</HttpsRedirect>
  );
}

export default App;
