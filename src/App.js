import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/pages/Contact";
import PartnerSection from "./components/PartnerSection";
import Cards from "./components/Cards";

function App() {
    return ( <
        >
        <
        BrowserRouter >
        <
        Navbar / >
        <
        Contact / >
        <
        PartnerSection / >
        <
        Cards / >
        <
        Routes >
        <
        Route path = "/"
        exact component = { Contact }
        />{" "} <
        /Routes>{" "} <
        /BrowserRouter>{" "} <
        />
    );
}

export default App;