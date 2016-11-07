import React from 'react'
import './../App.css'
// import Mentor from './../containers/Mentor'
import Map from './../containers/Map'
import LoaderView from './../components/LoaderView'
import NavBarView from './NavBarView'

const AppView = ({ loading }) => {
  return (
    <div className="App">
      {loading ?
        <LoaderView />
        :
        <div className="Map">
          <NavBarView />
          <Map />
        </div>
      }
      {/* <Mentor /> */}
    </div>
  )
}

export default AppView
