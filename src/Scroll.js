import React from 'react';

const Scroll = (props) => {
    return ( // adding styles directly to the div using double curly braces.
      <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
          {props.children}
      </div>  
    );
};

export default Scroll;