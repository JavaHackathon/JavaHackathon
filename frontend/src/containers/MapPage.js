// MapView.js

import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react'

const style = {
  width: '100%',
  height: '100%'
}

const MapPage = props => {

  let triangleCoords = [
  {lat: 25.774, lng: -90.190},
  {lat: 08.466, lng: -66.118},
  {lat: 22.321, lng: -64.757},
  {lat: 25.774, lng: -90.190}
  ]


  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  }

  _handleMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  _handleMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {

    return(
      <div>
      <Map onClick={this._handleMapClick}
        google={this.props.google}
        zoom={14}
        style={style}
        className={map}
        initialCenter={{
          lat: 32.779954,
          lng: -79.934375
        }}

          <Polygon paths={triangleCoords}
                  strokeColor="#0000FF"
                  strokeOpacity={0.8}
                  strokeWeight={2}
                  fillColor="#0000FF"
                  fillOpacity={0.35} />>
        <Marker onClick={this._handleMarkerClick}
                name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg')
})(MapContainer)
