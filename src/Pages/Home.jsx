import { useState, useEffect ,useRef} from 'react'
import MovieList from '../Components/MovieList'
import MovieCard from '../Components/MovieCard'


function Home() {
  const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);
  const inputRef=useRef()

  const fetchMovies = async (query) => {
    setLoading(true)
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f353259f&s=${query}`)
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search || [])
    setLoading(false)
  }
  useEffect(() => {
    fetchMovies("Avengers");
  },[]);

const handleSearch=(e)=>{
e.preventDefault();
 const query = inputRef.current.value.trim(); 
 if (query) fetchMovies(query)
}

  return (

    <div className="home">
      <form onSubmit={ handleSearch }>
        <input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
        <button type="submit">Search 🔎</button>
      </form>
{loading ? <p>Loading...</p> : <MovieList movies={movies} />}

      {/* <MovieList movies={movies}/> */}
    
    </div>
  )
}

export default Home
