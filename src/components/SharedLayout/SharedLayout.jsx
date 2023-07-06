import { Outlet, Link } from "react-router-dom";
import { BiSolidCameraMovie } from 'react-icons/bi';

const SharedLayout = () => {
    return(
        <div>
            <header>
                <div>
                    <span>
                        <BiSolidCameraMovie />
                    </span>
                    <span>
                        GoWatchMovies
                    </span>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies" >Movies</Link>
                    </li>
                </ul>
            </header>
            <Outlet />
        </div>
    );
}

export default SharedLayout;