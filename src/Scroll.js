import React from 'react';

const Scroll = (props) => {
    return ( // adding styles directly to the div using double curly braces.
      <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
          {props.children}
      </div>  
    );
};

export default Scroll;