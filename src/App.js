import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-5">
        <Project />
      </main>
      <Contact />
    </div>
  );
}

export default App;
