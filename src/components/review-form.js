import React, { useState } from 'react';

// functional component
// - 2 props = 'movieId & 'onAddReview'
// 'review(variable) & 'setReview'(function) are created using useState
// initial value of 'review' is set to '' (empty)
const ReviewForm = ({ movieId, onAddReview }) => {
  const [review, setReview] = useState('');

  // function for form submission
  //  - creates a 'newReview' object w/ 'movieId' (prop) and 'review' state as properties
  // 'onAddReview' function is called - passing 'newReview' object as argument to add the review
  // resets 'review' state to ''
  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { movieId, text: review };
    onAddReview(newReview);
    setReview('');
  };

// 'onSubmit' event calls 'handleSubmit (function)
// CHANGE 'TEXTAREA'!!! ****
// <textarea>
// - 'value' (prop) set to 'review' state - displays current value
// - 'onChange' event handler - calls the 'setReview' function when the value of the <textarea> changes - updating the 'review' state w/ new value
// 'handleSubmit' function is responsible for form submission
// 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Review:
        <br />
        <textarea value={review} onChange={(event) => setReview(event.target.value)} required />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
