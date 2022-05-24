import Sidebar from './components/Sidebar'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Page from './Screens'
import UIContextProvider from './context/UIcontext';
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <UIContextProvider>
      <Router>
        <Page />
      </Router>
    </UIContextProvider>
  );
}

export default App;
