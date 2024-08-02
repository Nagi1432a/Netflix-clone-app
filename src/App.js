import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js';
import Banner from './Banner.js';
import Nav from './Nav.js'



function App() {
  return (
    <div className="App">
      <Nav />
      
      <Banner />






       
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixoriginals}
      isLarger={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchAction}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance}/>

    
     
    </div>
  );
}

export default App;
