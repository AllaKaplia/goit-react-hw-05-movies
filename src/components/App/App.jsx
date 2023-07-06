import { Routes, Route } from "react-router-dom";
import Cast from "components/Cast";
import Home from "components/Home";
import MovieDetails from "components/MovieDetails";
import Movies from "components/Movies";
import NotFound from "components/NotFound";
import Reviews from "components/Reviews";
import SharedLayout from "components/SharedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;