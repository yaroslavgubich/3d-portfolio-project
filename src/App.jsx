// src/App.jsx

import Hero from "./components/sections/Hero";
import AnimatedCounter from "./components/sections/AnimatedCounder";
import Showcase from "./components/sections/Showcase";
import Navbar from "./components/Navbar";
import LogoSection from "./components/sections/LogoSection";
const App = () => (
  <main>
    <div>
      <Navbar />
      <Hero />
      <Showcase />
      <AnimatedCounter />
      <LogoSection />
    </div>
  </main>
);

export default App;
