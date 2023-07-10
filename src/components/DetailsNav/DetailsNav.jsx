import { NavLink } from "react-router-dom";


const DetailsNav = () => {
    return (
        <div>
            <h2>Additional information</h2>
            <ul>
                <li>
                    <NavLink to='cast'>Cast</NavLink>
                </li>
                <li>
                    <NavLink to='reviews'>Reviews</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default DetailsNav;