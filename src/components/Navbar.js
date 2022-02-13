import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
    const [click, set] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        set(!click);
    };
    const closeMobileMenu = () => {
        set(false);
    };

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener("resize", showButton);

    return ( <
        >
        <
        nav className = "navbar" >
        <
        div className = "navbar-container" >
        <
        Link to = "/"
        className = "navbar-logo"
        onClick = { closeMobileMenu } >
        <
        img className = "logo-image"
        src = "https://static.cronj.com/img/healthcare-app-development/healthcare-header_logo.webp" /
        > { " " } <
        /Link>{" "} <
        div className = "menu-icon"
        onClick = { handleClick } >
        <
        i className = { click ? "fas fa-times" : "fas fa-bars" }
        />{" "} <
        /div>{" "} <
        ul className = { click ? "nav-menu active" : "nav-menu" } >
        <
        li className = "nav-item" >
        <
        Link to = "/products"
        className = "nav-links"
        onClick = { closeMobileMenu } >
        Products { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-item" >
        <
        Link to = "/about"
        className = "nav-links"
        onClick = { closeMobileMenu } >
        About { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-item" >
        <
        Link to = "/portfolio"
        className = "nav-links"
        onClick = { closeMobileMenu } >
        Portfolio { " " } <
        /Link>{" "} <
        /li>{" "} <
        li className = "nav-item" >
        <
        Link to = "/services"
        className = "nav-links"
        onClick = { closeMobileMenu } >
        Services { " " } <
        /Link>{" "} <
        /li>{" "} <
        /ul>{" "} {
            button && < Button buttonStyle = "btn--outline" > Contact Us < /Button>}{" "} <
                /div>{" "} <
                /nav>{" "} <
                />
        );
    }

    export default Navbar;