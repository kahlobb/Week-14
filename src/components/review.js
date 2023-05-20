import React from 'react';
import Stars from './stars';


// Define the 'Review' component - takes a 'review' object as a prop
// The 'review' object is assumed to have 2 properties: 'text' & 'author'
// Render the review text using a <p> element w/ the text content of 'text' property
/* Render the name of the reviewer using <p> element w/ the text content of the 'author' property
    - wrapped in an <em> element to emphasize it */

const Review = ({ review }) => {
  return (
    <div key={review.id}>
      <Stars />
      <p>{review.text}</p>
    </div>
  );
};

// Export the 'Review' component for use in other parts of app
export default Review;
