import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SongOverview from './components/SongOverview';
import Header from './components/Header';
import About from './components/About';

function App() {

  useEffect(() => {
    document.title = 'React playlist'
  })

  return (
    <Router>
      <div className="App">
        <Header />
        <Route
          exact path="/"
          component=
          {SongOverview}
        />
        <Route
          path="/about"
          component=
          {About}
        />

      </div>
    </Router>
  );
}

export default App;
