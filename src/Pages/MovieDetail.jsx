import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function MovieDetail() {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f353259f&i=${id}`)
            const data = await res.json();
            setMovie(data)
            console.log(data)
        }
        getMovie();
    },[id])
     if(!movie) return <p>Loading..</p>
    return (
        <div className="movie-detail">
            <h2>Avengers: Infinity War</h2>
            <img alt={movie.Title}src={movie.poster}/>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Released:</strong> {movie.Released}</p>
                <p><strong>Plot:</strong> {movie.plot}</p>

        </div>
    )
}

export default MovieDetail

