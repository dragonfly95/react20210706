import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer'

import {BrowserRouter, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage'

function App() {
  return (
    <div className="App">
      <CounterContainer/>
        <BrowserRouter>
        <Route path="/:category?" component={NewsPage} />
        </BrowserRouter>
    </div>
  );
}

export default App;
