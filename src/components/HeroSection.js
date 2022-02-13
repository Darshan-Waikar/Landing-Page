import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
    return ( <
        div className = "hero" >
        <
        div className = "hero-container" > { " " } { /* <video src="\video-2.mp4" autoPlay loop muted /> */ } { " " } <
        h1 >
        Use the NFT marketplaces to auction your < br / > art work with CronJ 's{" "} <
        span className = "nft" > NFT Development < /span> <br / > Initiative { " " } <
        /h1>{" "} <
        p > { " " }
        Enhance your artistic visibility on renowned platforms at $8 / hr { " " } <
        /p>{" "} <
        div className = "hero-btns" >
        <
        Button className = "btns"
        ButtonStyle = "btn--outline"
        buttonSize = "btn--large" >
        Hire in 24 hours at just $8 / hour!
        <
        /Button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
}

export default HeroSection;