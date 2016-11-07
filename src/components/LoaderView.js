import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const LoaderView = () => (
    <div className="Overlay">
      <div style={{position: 'relative'}}>
        <CircularProgress
          size={70}
          thickness={5}
          style={{marginLeft: '50%', marginTop: '10%'}}
          color="#404853"
        />
      </div>
    </div>
);

export default LoaderView
