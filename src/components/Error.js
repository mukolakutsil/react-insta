import React from 'react';

import img from '../error.png';


const ErrorMessage = (props) => {
    return (
        <img src={img} alt="error" className={props.small ? 'errorMessage' : null} />
    )
}

export default ErrorMessage;