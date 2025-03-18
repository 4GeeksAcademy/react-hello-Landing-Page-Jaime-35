import React from "react";

const Jumbotron = () => {
    return (
      <div 
        className="jumbotron bg-light p-5 mt-4 text-center" 
        style={{
          
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "green",
          textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          padding: "100px 20px",
          borderRadius: "10px"
        }}
      >
        <h1 className="display-4">Aquí Empieza Tu Aventura</h1>
        <p className="lead">
          Explora El Mundo Con Sus Distintos Destinos
        </p>
        <a href="#" className="btn btn-primary btn-lg">Empieza tu aventura</a>
      </div>
    );
  };

export default Jumbotron;