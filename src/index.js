import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/reset-css.css';
import './styles/style.css';
import './index.css';
import './styles/keyframes.css';
import './styles/animations.css';
import './styles/transitions.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
