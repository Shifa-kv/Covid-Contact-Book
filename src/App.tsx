import React from 'react';
import './App.css';
import Contact from './Pages/Contact';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
              <Routes>
                <Route path='/' element={<Contact />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
              </Routes>
            </Router>
      </div>
    </Provider>
  );
}

export default App;
