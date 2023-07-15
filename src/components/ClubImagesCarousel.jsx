import React from "react";
import ImageCarousel from "components/ImageCarousel.jsx";

import LastHackNight from "assets/carousel_new/1_F22_Last_Hack_Night.jpg";
import MassMeeting from "assets/carousel_new/2_W23_Mass_Meeting.jpg";
import SIGEvent from "assets/carousel_new/3_F22_SIG_Event.jpg";
import ExecAtWinterfest from "assets/carousel_new/4_W23_Exec_At_Winterfest.jpg";
import PaintTheRock from "assets/carousel_new/5_F22_Paint_The_Rock.JPG";
import CrowdstrikeEvent from "assets/carousel_new/6_F22_Crowdstrike_Event.jpg";
import HackHersCasinoNight from "assets/carousel_new/7_W23_Hack_Hers_Casino_Night.JPG";
import ExecAtPinballPetes from "assets/carousel_new/8_F21_Exec_At_Pinball_Petes.jpg";
import LeadsIceCreamSocial from "assets/carousel_new/9_F22_Leads_Ice_Cream_Social.jpg";
import BowlingHKN from "assets/carousel_new/10_F22_Bowling_HKN.jpg";
import Festifall from "assets/carousel_new/11_F22_Festifall.jpg";

// List of club images to include in the image carousel
const images = [
    { url: LastHackNight, description: "Last Hack Night of 2022" },
    { url: MassMeeting, description: "Mass Meeting Winter 2023" },
    { url: SIGEvent, description: "SIG Sponsor Event 2022" },
    { url: ExecAtWinterfest, description: "Exec at Winterfest 2023" },
    { url: PaintTheRock, description: "Painting the Rock 2022" },
    { url: CrowdstrikeEvent, description: "Crowdstrike Sponsor Event 2022" },
    { url: HackHersCasinoNight, description: "Hack Hers Casino Night 2023" },
    {
        url: ExecAtPinballPetes,
        description: "Pinball Pete's Social Night 2021",
    },
    { url: LeadsIceCreamSocial, description: "Leads Ice Cream Social 2022" },
    { url: BowlingHKN, description: "Bowling Night With HKN 2022" },
    { url: Festifall, description: "Michigan Hackers at Festifall 2022" },
];

const ClubImagesCarousel = () => {
    return <ImageCarousel images={images} />;
};

export default ClubImagesCarousel;
