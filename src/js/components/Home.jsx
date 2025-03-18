import React from "react";

import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <Cards />
                <Footer/>
            </div>
        </div>
    );
}

export default Home;