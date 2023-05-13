import React, { useState } from "react";
import { GiImbricatedArrows } from "react-icons/gi";

const TopButton = () => {
    const [backTop, setBackTop] = useState(false);
    const moveToTop = () => {
      document.documentElement.scrollTop = 0;
    };
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  return (
    <>
      <div>
        {backTop ? (
          <div
            onClick={moveToTop}
            className=" btn-primary top_arrow position-fixed bottom-0 end-0 me-sm-4 mb-sm-4 me-2 mb-2"
          >
            <GiImbricatedArrows />
          </div>
        ) : (
          ""
        )}
        <div></div>
      </div>
    </>
  );
};

export default TopButton;
