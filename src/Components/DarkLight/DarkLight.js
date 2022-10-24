import React, { useState } from "react";
import { TbMoonStars } from "react-icons/tb";
import { GrSun } from "react-icons/gr";

const DarkLight = () => {
    const [isDark,setIsDark] = useState(false);
    const handleClick = ()=>{
        setIsDark(!isDark);
    }
  return (
      <button onClick={handleClick} className="border-0 bg-transparent ms-3">
        {isDark?<TbMoonStars />:<GrSun />}
      </button>
    );
};

export default DarkLight;
