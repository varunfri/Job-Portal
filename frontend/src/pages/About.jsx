import React from "react";
import { useRouteLoaderData } from "react-router-dom";

const About = () => {
  return (
    <div style={{ width: "100%", height: "90vh", overflow: "hidden" }}>
      <iframe
        title="External Website"
        // Enter the website for the source code
        src=""
        style={{ width: "98.8vw", height: "100%", border: "none" }}
      ></iframe>
    </div>
  );
};

export default About;
