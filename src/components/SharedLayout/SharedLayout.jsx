import { Outlet, Link } from "react-router-dom";
import { BiSolidCameraMovie } from 'react-icons/bi';
import { Suspense } from "react";
import Loader from "components/Loader";
import { BoxNav, Container, Header, LinkButton, LogoIcon, LogoText, NavLogo } from "./SharedLayout.styled";
import { RiHomeHeartFill, RiMovie2Line } from 'react-icons/ri';

const SharedLayout = () => {
    return(
        <Container>
            <Header>
                <NavLogo to="/">
                    <LogoIcon>
                        <BiSolidCameraMovie size={40}/>
                    </LogoIcon>
                    <LogoText>
                        GoWatchMovies
                    </LogoText>
                </NavLogo>
                <BoxNav>
                    <li>
                        <Link to="/">
                            <LinkButton type="button">
                                <RiHomeHeartFill />
                                Home
                            </LinkButton>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <LinkButton type="button">
                                <RiMovie2Line />
                                Movies
                            </LinkButton>
                        </Link>
                    </li>
                </BoxNav>
            </Header>
            <Container>
                <div>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </Container>
        </Container>
    );
}

export default SharedLayout;