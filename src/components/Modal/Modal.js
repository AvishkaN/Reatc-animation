import React from 'react';

import './Modal.css';

const modal = (props) => {
    const modelClasess=props.modelStatus ?'Modal ModelOpen':'Modal ModelClose';

    return(
        <div className="Modal ModelOpen">
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closeModel}>Dismiss</button>
        </div>
    )
};

export default modal;