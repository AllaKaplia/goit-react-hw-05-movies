import { NavLink } from "react-router-dom";
import { LiaStepBackwardSolid } from 'react-icons/lia';
import { ContainerBack, Detailed, GoBack } from "./GoBackLink.styled";


const GoBackLink = ({ to }) => {
    return (
        <ContainerBack>
            <NavLink to={to}>
                <GoBack type="button">
                    <LiaStepBackwardSolid />
                    <span>Go back</span>
                </GoBack>
            </NavLink>
            <Detailed>Detailed description of the film</Detailed>
        </ContainerBack>

    )
}

export default GoBackLink;