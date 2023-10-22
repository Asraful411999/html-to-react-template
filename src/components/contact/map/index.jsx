import React from 'react';
import GoogleMap from './gmap';

const Map = ()=> {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Maps in React</h1>
        <GoogleMap />
      </header>
    </div>
  );
}

export default Map;