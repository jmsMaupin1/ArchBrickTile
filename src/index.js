import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';

import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import Suppliers from './views/Suppliers';
import App from './views/App';
import './index.css';

ReactDOM.render(
	<StyleRoot>
	  	<Router history={browserHistory}>
	  		<Route path="/" component={App}>
	  			<IndexRoute component={Home} />
	  			<Route path="contact" component={Contact} />
	  			<Route path="about" component={About} />
	  			<Route path="suppliers" component={Suppliers} />
	  		</Route>
	  	</Router>
  	</StyleRoot>,
  document.getElementById('root')
);
