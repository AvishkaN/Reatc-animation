import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  
const backDrop=props.modelStatus ?'Backdrop BackdroplOpen':' BackdroplOpen';

    return(
        <div className="Backdrop BackdroplOpen"></div>
    );
};


export default backdrop;