// src/App.jsx

import Hero from "./components/sections/Hero";
import AnimatedCounter from "./components/sections/AnimatedCounder";
import Showcase from "./components/sections/Showcase";
const App = () => (
  <main>
    <div>
      <Hero />
      <Showcase />
      <AnimatedCounter />
    </div>
  </main>
);

export default App;
