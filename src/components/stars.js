import React, { useState } from 'react';

const Stars = ({ reviews }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{
            color: value <= selectedRating ? 'gold' : 'gray',
            cursor: 'pointer',
          }}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
      <p>{selectedRating} / 5</p>
    </div>
  );
};

export default Stars;
