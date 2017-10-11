
//react imports
import React from 'react';
import ReactDOM from 'react-dom';

//router imports
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//redux imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './store/reducers/index';

//import styles
import './styles/index.css';

//component imports
import App from './containers/App';
import BaseLayout from './containers/BaseLayout';
import ResultsContainer from './containers/ResultsContainer';

//BaseLayout imported...Here
import ResultCard from './components/ResultCard';
import SearchForm from './components/SearchForm';

//create store for redux and apply middleware
const createStoreWithMiddleware = applyMiddleware()(createStore);

//wrap provider around router
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <BrowserRouter>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/results" component={ResultCard}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
