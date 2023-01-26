import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import Movie from "../components/Movies";


function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const jsonData = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
    console.log(jsonData)
    setMovie(jsonData.data.movie);
    setLoading(false);
    }

    useEffect(() => {
       getMovie();
    },[])
    return (
        <div>
        {loading ? <h1>loading...</h1> : null}
        <ul>
            <Movie
                key={movie.id}
                id={movie.id}
                medium_cover_image={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}

            />
        </ul>
        </div>);
    }

export default Detail;