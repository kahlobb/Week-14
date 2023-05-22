import React from 'react';

const StarRating = ({ selectedRating }) => {
    return (
        <div>
            <p>Stars: {selectedRating}/5</p>
        </div>
    );
};

export default StarRating;
