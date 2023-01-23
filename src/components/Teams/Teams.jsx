import React, { useRef, useEffect } from "react";
import "utility/fonts.css";
import Navbar from "components/Navbar.jsx";
import styled from "styled-components";
import teams from "teams.json";
import SubteamCard from "components/Teams/SubteamCard.jsx";
// import devices from "utility/MediaQueries.js";

// function useWindowSize() {
//     const [windowSize, setWindowSize] = useState({
//       width: undefined,
//       height: undefined,
//     });
//     useEffect(() => {
//       function handleResize() {
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       }
//       window.addEventListener("resize", handleResize);
//       handleResize();
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);
//     return windowSize;
//   }


const SubteamCardsDiv = styled.div`
    padding: 0 1rem;
`;

const SidebarWrapper = styled.div`
    background-color: #eee;
`;

const Sidebar = styled.div`
    padding: 2rem;
    width: inherit;
    position: fixed;
    width: 400px;
`;
const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 400px 1fr;
`;

const SidebarLink = styled.a`
    display: block;
    padding: 1rem;
    width: 100%;

    &:hover {
        background-color: #ddd;
        cursor: pointer;
    }
`;

const Teams = () => {
    const teamNames = teams.map(team => team.name);
    const teamIds = teamNames.map(name => name.replaceAll(" ", "_").toLowerCase());
    const cardsRef = useRef([]);
    // const windowSize = useWindowSize();

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, teams.length);
        if (window.location.hash !== "" && document.querySelector(window.location.hash)) {
            window.history.scrollRestoration = "manual";
            // have to wait for all images to load before we can calculate how far to scroll
            Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
                const navbarHeight = window.innerWidth <= 768 ? 74 : 80;
                const onerem = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
                const padding = 1 * onerem;
                const yOffset = -(navbarHeight + padding); 
                const element = document.querySelector(window.location.hash);
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({top: y, behavior: 'instant'});
            });
        }
    },[]);


    const handleClick = (e, i) => {
        e.preventDefault();
        const navbarHeight = window.innerWidth <= 768 ? 74 : 80;
        const onerem = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
        const padding = 1 * onerem;
        const yOffset = -(navbarHeight + padding); 
        const element = cardsRef.current[i];
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
        window.history.replaceState(null, "", window.location.href.split("#")[0] + "#" + teamIds[i]);
    };

    return (
        <>
            <Navbar />
            <PageLayout>
            <SidebarWrapper>
                <Sidebar>
                    {teamNames.map((team, i) => 
                        <SidebarLink key={i} onClick={e => handleClick(e, i)}>
                            {team}
                        </SidebarLink>
                    )}
                </Sidebar>
            </SidebarWrapper>
            <SubteamCardsDiv>
                {teams.map((team, i) => 
                    <SubteamCard
                        innerRef={el => cardsRef.current[i] = el}
                        team={team}
                        key={i}
                        even={i % 2 === 0}
                        first={i == 0}
                        teamId={teamIds[i]}
                    />
                )}
            </SubteamCardsDiv>
            </PageLayout>
        </>
    );
};

export default Teams;