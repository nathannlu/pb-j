import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import Work from './components/Work';
import About from './components/About';

function App() {
  return (
		<HttpsRedirect>
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Landing} />
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
