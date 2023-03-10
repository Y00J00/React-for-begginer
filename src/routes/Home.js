import {useState, useEffect} from "react";
import Movie from "../components/Movies";
import styles from "./Home.module.css";

// function Home() {
//   return <h1>home</h1>
// }

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const response = await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      );
      const jsonData = await response.json();
      setMovies(jsonData.data.movies);
      setLoading(false);
    };
    useEffect(() => {getMovies();}, [])
    // useEffect(() => {
    //   fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    //   .then(response => response.json())
    //   .then(jsonData => {
    //     setMovies(jsonData.data.movies);
    //     setLoading(false);
    // })}, [])
    console.log(movies);
    return (
      <div  className={styles.container}>
      <div  className={styles.loader}>
        {loading ? <h1>loading...</h1> : null}
      </div>
      <ul>
        <div  className={styles.movies}>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          ))}
        </div> 
      </ul>
      </div>);
  }
export default Home;