import './App.css';
import RouteHandler from './Router/RouteHandler';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>

    </div>
  );
}

export default App;
