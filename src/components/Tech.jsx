import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [showTooltip, setShowTooltip] = useState(null);

  const handleMouseEnter = (id) => {
    setShowTooltip(id);
  };

  const handleMouseLeave = () => {
    setShowTooltip(null);
  };
  console.log("This is enter and leave", showTooltip)
  return (
    <div className="flex flex-col gap-8" >
      <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}>
        Technologies
      </h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}
            role="button"
            onMouseEnter={() => handleMouseEnter(technology.id)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />
            {
              showTooltip && showTooltip === technology.id ? <h2 style={{ textAlign: 'center' }} >{technology.name}</h2> : ''
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
