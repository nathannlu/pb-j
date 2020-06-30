import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
import Work from './components/Work';

function App() {
  return (
		<Router>
			<div className="App">
				<Route exact path="/work" component={Work} />
				<Route exact path="/pricing" component={Pricing} />
				<Route exact path="/" component={Landing} />
			</div>
		</Router>
  );
}

export default App;
