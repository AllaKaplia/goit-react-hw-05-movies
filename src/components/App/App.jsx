import Home from "components/Home";
import MovieDetails from "components/MovieDetails";
import Movies from "components/Movies";
import NotFound from "components/NotFound";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" end>Home</Link>
        </li>
        <li>
          <Link to="/movies" >Movies</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;