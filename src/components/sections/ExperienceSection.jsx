// src/components/sections/ExperienceSection.jsx
import TitleHeader from "../TitleHeader";
import { expCards } from "../../constants";
import GlowCard from "../GlowCard";
const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼My Career Overview"
        />
      </div>
      <div className="mt-32 relative">
        <div className="relative z-50 xl:space-v-32 space-v-10">
          {expCards.map((card) => (
            <div key={card.title} className="exp-card-wrapper">
              <div className="xl:w-2/6">
                <GlowCard card={card} />
                <div>
                  <img src={card.imgPath} alt={card.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ExperienceSection;
