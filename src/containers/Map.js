import React, { Component } from 'react'
import { connect } from 'react-redux'
import MapView from '../components/MapView'
import { fetchMentors, onMarkerClick } from '../actions'
import _ from "lodash"

const markers = [
  {
    id: 1,
    position: {
      lat: 40.731900,
      lng: -73.992811
    },
    image_url: 'https://www.gravatar.com/avatar/1b636fe3798b471991f445510b6caffc?s=100&d=retro',
    first_name: 'Ray',
    last_name: 'Smith',
    showInfo: true,
    slack_handle: 'rsmith'
  }
];


class Map extends Component {

  handleMarkerClick(targetMarker) {
    this.props.onMarkerClick(targetMarker.id)
  }

  handleMarkerClose(targetMarker) {
    this.markers.map(marker => {
      if (marker === targetMarker) {
        return {
          ...marker,
          showInfo: false,
        }
      }
    });
  }

  render() {
    return (
      <MapView
        {...this.props}
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        onMapLoad={_.noop}
        onMapClick={_.noop}
        markers={markers}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMarkerClose={this.handleMarkerClose.bind(this)}
      />
    );
  }
}

export default connect(
  state => ({
    markers: state.mentor.mentors,
    loading: state.mentor.isFetching
  }),
  dispatch => ({
    fetchMentors,
    onMarkerClick: (marker) => dispatch(onMarkerClick(marker))
  })
)(Map)
