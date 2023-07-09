import { NavLink } from "react-router-dom";
import { LiaStepBackwardSolid } from 'react-icons/lia';


const GoBackLink = ({ to }) => {
    return (
        <NavLink to={to}>
            <LiaStepBackwardSolid />
            <span>Go back</span>
        </NavLink>
    )
}

export default GoBackLink;