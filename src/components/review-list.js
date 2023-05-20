import React from 'react';
import Review from './review';
import Stars from './stars';

// Define the 'ReviewList' component - takes 'reviews' array as a prop
/* If there are reviews in the 'reviews' array,
    we render each review using the 'map()' method and the 'Review component. */
/* We pass the 'review' object as a prop to the 'Review' component,
    and we set the 'key' prop to the 'id' of the 'review' object to avoid warning messages in console */

// If there are no reviews in the 'reviews' array - message "No reviews yet"

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => <Review key={review.id} review={review} />)
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
};

export default ReviewList;


