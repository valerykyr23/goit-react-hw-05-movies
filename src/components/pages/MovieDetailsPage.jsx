import { Link, Outlet } from 'react-router-dom';

// const API_KEY = 3e2a9b79a5e73de05d8a7a802641b9ca;
// https://api.themoviedb.org/3/movie/550?api_key=3e2a9b79a5e73de05d8a7a802641b9ca


const MovieDetails = () => {
    return <div>
        

        <ul>
            <li> <Link to="casts">Casts</Link></li>
            <br></br>
            <li><Link to="reviews">Reviews</Link></li>
            <br></br>
        </ul>

        <Outlet/>
    </div>
};

export default MovieDetails;