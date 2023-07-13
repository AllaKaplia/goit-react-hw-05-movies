import { Link } from "react-router-dom";
import { GiExitDoor } from 'react-icons/gi';
import { BackBox, BackBtn, TextNotFound } from "./NotFound.styled";



const NotFound = () => {

    return (
        <BackBox>
            <Link to="/">
                <BackBtn type="button">
                    <GiExitDoor />
                    Go Back Home
                </BackBtn>
            </Link>
            <TextNotFound>Unfortunately, no such page was found :(</TextNotFound> 
        </BackBox>
    );
}

export default NotFound;