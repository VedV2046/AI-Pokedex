import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./header";
import PokeBall from "./pokeball";
import DotGrid from "../ReactBits/DotGrid";
import Pokedex from "./pokedex";
import Sidebar from "./sidebar";
import TypePage from "./typePage";
import Footer from "./footer";

function App() {
  return (
    <div className="app-container">
        <Sidebar />
        <div className="main-content">
            <Header />
            <PokeBall/>
            <Routes>
              <Route path="/" element={
                  <div style={{ width: '100%', minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
                          <DotGrid
                              dotSize={8}
                              gap={12}
                              baseColor="#a50000ff"
                              activeColor="#ff0000ff"
                              proximity={40}
                              shockRadius={50}
                              shockStrength={10}
                              resistance={100}
                              returnDuration={12}
                          />   
                      </div>
                      <div style={{ position: 'relative', zIndex: 1, flex: 1, paddingBottom: '4rem' }}>
                          <Pokedex />
                      </div>
                  </div>
              } />
              <Route path="/type/:typeName" element={<TypePage />} />
            </Routes>
            <Footer />
        </div>
    </div>
  );
}

export default App;