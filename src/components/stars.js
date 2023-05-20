import React, { useState } from 'react';

// functional component
// - 1 prop = 'reviews'
// 'selectedRating' (variable) & 'setSelectedRating' (function to update 'selectedRating')
// 'selectedRating' is set to 0
const Stars = ({ reviews }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  // 'handleStarClick' function
  // function to handle click event on a star
  //  - when clicked 'setSelectedRating' is set to 
  const handleStarClick = (rating) => {
    setSelectedRating(rating);
  };
// 'calculateAverageRating' function
//   - calculates average rating based on 'reviews' prop
// no reviews = 0 rating
  const calculateAverageRating = () => {
    if (reviews.length === 0) {
      return 0;
    }
    // OTHERWISE *** uses 'reduce()' method to calculate the total rating by summing up the 'rating' property of each review in the 'reviews' array.
    // Then divides the total rating by the number of reviews
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

// averageRating variable is assigned the value returned by the 'calculateAverageRating' function
  const averageRating = calculateAverageRating();

// uses an array of #s [1-5] to render each star
// inside map() - for each value in the array, a <span> element is rendered
// key = set to the current value
// style prop based on the condition 'value <= (selectedRating || averageRating)'
//   - if the current value is <= the selected rating (if available) or the average rating - the star color is set to 'gold'; otherwise set to 'gray'
// 'onClick' event handler is attached to each star, which calls the 'handleStarClick' function with the corresponding value when clicked
// after rendering stars, <p> rendered to display current rating
// value displayed is '(selectedRating || averageRating).toFixed(1)
//    - represents the selected rating if available or the average rating, rounded to one decimal place
//    - it is divided by 5 to represent the rating out of 5
  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{
            color: value <= (selectedRating || averageRating) ? 'gold' : 'gray',
            cursor: 'pointer',
          }}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
      <p>{(selectedRating !== 0 ? selectedRating : averageRating)} / 5</p>
    </div>
  );
};

export default Stars;