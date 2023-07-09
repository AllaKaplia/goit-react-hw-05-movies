import { Outlet, Link, NavLink } from "react-router-dom";
import { BiSolidCameraMovie } from 'react-icons/bi';
import { Suspense } from "react";
import Loader from "components/Loader";

const SharedLayout = () => {
    return(
        <div>
            <header>
                <NavLink to="/">
                    <span>
                        <BiSolidCameraMovie size={24} />
                    </span>
                    <span>
                        GoWatchMovies
                    </span>
                </NavLink>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies" >Movies</Link>
                    </li>
                </ul>
            </header>
            <main>
                <div>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </main>
        </div>
    );
}

export default SharedLayout;