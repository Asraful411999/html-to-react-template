import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class gmap extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '400px' }}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: 37.7749, // Your initial latitude
            lng: -122.4194, // Your initial longitude
          }}
          zoom={14}
        >
          <Marker
            title={'My Location'}
            name={'My Location'}
            position={{
              lat: 37.7749, // Your marker's latitude
              lng: -122.4194, // Your marker's longitude
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(gmap);