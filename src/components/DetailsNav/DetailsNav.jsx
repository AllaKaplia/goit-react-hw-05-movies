import { NavLink } from "react-router-dom";


const DetailsNav = () => {
    return (
        <ul>
            <li>
                <NavLink to='cast'>Cast</NavLink>
            </li>
            <li>
                <NavLink to='reviews'>Reviews</NavLink>
            </li>
        </ul>
    )
}

export default DetailsNav;