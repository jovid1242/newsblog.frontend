import React from 'react';
import Loader from 'react-loader-spinner';

function Loading() {
    return (
        < Loader
            type="TailSpin"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={10000}
        />
    )
}

export default Loading;