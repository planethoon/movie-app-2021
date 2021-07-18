import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movies from './Movies'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () =>{
    const {data: {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    setMovies(movies);
    setIsLoading(false);
  }

  useEffect(()=> {
    getMovies();
    console.log(movies);
  }, [])


  return (
    <div>
      {isLoading ? 'Loading...' :  movies.map((movie)=> { return <Movies key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} /> })}
    </div>
  )
}


export default App;
      //{id, year, title, summary, poster}
      //

