import React from "react";
import PokeBall from "./pokeball";

function Footer() {
    return(
         <div className="container"> 
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
                <p className="col-md-4 mb-0 text-body-primary">© 2026 Ved Vharamble</p> 
                <img className="footer-ball" src="/images/pokeball-pokemon-svgrepo-com.svg"></img>
                <ul className="nav col-md-4 justify-content-end"> 
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-primary">Home</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-primary">Features</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-primary">Pricing</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-primary">FAQs</a></li> 
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-primary">About</a></li> 
                </ul> 
            </footer> 
        </div>
    );
}

export default Footer;