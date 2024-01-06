import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
    return <div>
        

        <ul>
            <li> <Link to="casts">Casts</Link></li>
            <br></br>
            <li><Link to="reviews">Reviews</Link></li>
        </ul>

        <Outlet/>
    </div>
};

export default MovieDetails;