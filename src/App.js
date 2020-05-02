import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './assets/images/background.jpg';
import DefaultPage from './pages/DefaultPage/DefaultPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="banner-container">
        <section className="section">
            <DefaultPage background={ Background }/>
        </section>
        <section className="section">
            <DetailsPage />
        </section>
      </div>
    );
  }
}

export default App;
