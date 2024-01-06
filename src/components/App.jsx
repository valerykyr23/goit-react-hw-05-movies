import { Routes, Route } from "react-router-dom";
import Casts from "./Cast/Cast";
import Layout from "./Layout/Layout";
import Home from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetailsPage";
import Movies from "./pages/MoviesPage";
import Reviews from "./Reviews/Reviews";



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
          <Route path="/movies/:movieId" element={<MovieDetails/>}>
            <Route path="casts" element={<Casts/>} />
            <Route path="reviews" element={<Reviews/>} />
       </Route>
        </Route>
        
      </Routes>

    </div>
  );
};
