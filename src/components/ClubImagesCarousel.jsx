import React from "react";
import ImageCarousel from "components/ImageCarousel.jsx";

import CoreTeam from "assets/carousel/CoreTeam.jpg";
import Squad from "assets/carousel/Squad.jpg";
import Bros from "assets/carousel/Bros.jpg";
import PaintTheRockGroup from "assets/carousel/PaintTheRockGroup.jpg";
import PaulBubble from "assets/carousel/PaulBubble.jpg";
import JanetBubbles from "assets/carousel/JanetBubbles.jpg";
import Escapade from "assets/carousel/Escapade.jpg";
import ErichHands from "assets/carousel/ErichHands.jpg";
import Smoothie from "assets/carousel/Smoothie.jpg";
import MichiganRock from "assets/carousel/MichiganRock.jpg";
import MassMeeting2021 from "assets/carousel/MassMeeting2021.jpg";
import Festifall2021 from "assets/carousel/Festifall2021.jpg";
import Festifall2021_1 from "assets/carousel/Festifall2021_1.jpg";
import N1CTFNovember from "assets/carousel/N1CTFNovember.jpg";
import PinballPetes2021 from "assets/carousel/PinballPetes2021.jpg";
import PinballPetes2021Leads from "assets/carousel/PinballPetes2021Leads.jpg";

// List of club images to include in the image carousel
const images = [
    {
        url: N1CTFNovember,
        description:
            "NU1L Capture the Flag Kickoff hosted by our Security Team",
    },
    { url: PinballPetes2021, description: "Pinball Pete's Social Night 2021" },
    {
        url: PinballPetes2021Leads,
        description: "Our Exec Team having fun at a social night",
    },
    { url: MassMeeting2021, description: "Mass Meeting 2021" },
    { url: Festifall2021, description: "Our Festifall 2021 booth" },
    {
        url: Festifall2021_1,
        description: "Team leads at our Festifall 2021 booth",
    },
    { url: CoreTeam, description: "The entire 2019-2020 Team!" },
    { url: Squad, description: "Festifall 2019" },
    { url: ErichHands, description: "Paint the Rock 2019" },
    { url: Bros, description: "Mass Meeting 2019" },
    { url: PaintTheRockGroup, description: "Paint the Rock 2019" },
    { url: JanetBubbles, description: "Hands up!" },
    { url: Escapade, description: "Escapade 2019" },
    { url: Smoothie, description: "Smoothie Party 2019" },
    { url: PaulBubble, description: "Paul being introspective" },
    { url: MichiganRock, description: "Paint the Rock 2019" },
];

const ClubImagesCarousel = () => {
    return <ImageCarousel images={images} />;
};

export default ClubImagesCarousel;
