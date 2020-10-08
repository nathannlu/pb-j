import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';

import Landing from './components/Landing';
import HostGenius from './components/HostGenius';

function App() {
  return (
		<HttpsRedirect>
			<Router forceRefresh={true}>
				<div className="App relative">
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/work/hostgenius" component={HostGenius} />
						{/*
						<Route exact path="/work" component={Work} />
						<Route exact path="/pricing" component={Pricing} />
						<Route exact path="/about" component={About} />
						*/}
					</Switch>
				</div>
			</Router>
		</HttpsRedirect>
  );
}

export default App;
