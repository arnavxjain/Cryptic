import React from 'react';
import loader from '../assets/loader.gif';

const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader}/>
        </div>
    )
}

export default Loader;