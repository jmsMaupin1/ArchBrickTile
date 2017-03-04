import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import About from './views/About';
import Contact from './views/Contact';
import Home from './views/Home';
import ProductGallery from './views/ProductGallery';
import App from './views/App';
import './index.css';

ReactDOM.render(
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home} />
  			<Route path="contact" component={Contact} />
  			<Route path="about" component={About} />
  			<Route path="product" component={ProductGallery} />
  		</Route>
  	</Router>,
  document.getElementById('root')
);
