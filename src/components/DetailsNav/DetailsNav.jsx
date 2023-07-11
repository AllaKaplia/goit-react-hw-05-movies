import { GiClick } from 'react-icons/gi';
import { Additional, DetailsItem, DetailsList, LinkCast } from "./DetailsNav.styled";


const DetailsNav = () => {
    return (
        <div>
            <Additional>Additional Information</Additional>
            <DetailsList>
                <DetailsItem>
                    <LinkCast to='cast'>Cast</LinkCast>
                    <GiClick size={30}/>
                </DetailsItem>
                <DetailsItem>
                    <LinkCast to='reviews'>Reviews</LinkCast>
                    <GiClick size={30}/>
                </DetailsItem>
            </DetailsList>
        </div>
    )
}

export default DetailsNav;