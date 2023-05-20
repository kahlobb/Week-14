import React from 'react';
import Movie from './movie';
import GodfatherPoster from '../images/GodfatherPoster.jpeg';
import TitanicPoster from '../images/TitanicPoster.jpeg';
import TopGunPoster from '../images/TopGunPoster.jpeg';

// 'movies' array - composed of objects w/ properties
const movies = [
  {
    id: 1,
    title: 'The Godfather',
    synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    image: GodfatherPoster,
    reviews: [],
    ratings: []
  },
  {
    id: 2,
    title: 'Titanic',
    synopsis: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the "ship of dreams" -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.',
    image: TitanicPoster,
    reviews: [],
    ratings: []
  },
  {
    id: 3,
    title: 'Top Gun',
    synopsis: 'As students at the United States Navy\'s elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.',
    image: TopGunPoster,
    reviews: [],
    ratings: []
  },
];

// 'MovieList = functional component
//   - inside the <div> it maps over the 'movies' array 
//   - renders a '<Movie>' component
// 'key' prop = movie 'id'
const MovieList = () => {
  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

// Essentially passes each 'movie' object as a prop to the 'Movie' component