import React from 'react';

const Backdrop = props => (
  <div
    style={{
      position: 'fixed',
      top: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: '100'
    }}
    onClick={props.click}
  />
);

export default Backdrop;