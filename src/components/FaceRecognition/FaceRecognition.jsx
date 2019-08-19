import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {
    return(
        <div className="center ma">
            <div className='absolute mt2'>
                <img className='image-recogn' src={imageUrl} alt="faces to be detected" width='500px' height='auto'/>
            </div>
        </div>
    );
}

export default FaceRecognition;