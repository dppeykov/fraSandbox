import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
    return(
        <div className="center">
            <img src={imageUrl} alt="faces to be detected" />
        </div>
    );
}

export default FaceRecognition;