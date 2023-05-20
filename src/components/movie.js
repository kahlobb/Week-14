import React, { useState } from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';
import Stars from './stars';
    
// 'Movie' = functional component // 'movie' = prop
// useState creates 'reviews' (variable) && 'setReviews' (function to update reviews)
// 'movie.reviews' = initial value of 'reviews' is set to the 'movie.reviews' value through the prop
  const Movie = ({ movie }) => {
    const [reviews, setReviews] = useState(movie.reviews);
  
  // function to add new review to the 'reviews' state
  // newReview = parameter of 'handleAddReview'
  // '...reviews' = creates a new array that includes existing 'reviews' + 'newReview'
  // calls 'setReviews' - updates the 'reviews' by passing in the new array of 'reviews'
  const handleAddReview = (newReview) => {
    setReviews([...reviews, newReview]);
    };
  
  // represents the movie details
  // 'Stars' component passes the 'reviews' state as a prop *****
  // 'ReviewList' passes the 'reviews' state as a prop
  // 'Review Form' passes the movie's 'id' & 'handleAddReview' function as props
  return (
    <div>
    <h2>{movie.title}</h2>
    <img src={movie.image} alt={`Poster for ${movie.title}`} style={{ maxWidth: '200px', height: 'auto' }} />
    <p>{movie.synopsis}</p>
    <p>Rating: {movie.rating}/5</p>
      <Stars reviews={movie.reviews} />
      <ReviewList reviews={reviews} />
      <ReviewForm movieId={movie.id} onAddReview={handleAddReview} />
    </div>
  );
};
    
export default Movie;
