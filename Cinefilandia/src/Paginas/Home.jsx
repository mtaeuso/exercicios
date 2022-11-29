import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
/* hooks:
 useState: gerencia o estado dos filmes
 useEffect: faz a chamada da api 
 */ 

 const moviesURL = import.meta.env.VITE_API;
 const apiKey = import.meta.env.VITE_API_KEY;
  
const Home = () => {

     const [topRated, setTopRated] = useState([])
     const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
/* recebe os dados, e transforma eles num array de objetos js utilizando o metodo json */ 
        setTopRated(data.results);
};

useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);

}, []);

    return <div> {topRated && topRated.map((movie) => <p>{movie.title} </p>)} </div>;

};

export default Home;