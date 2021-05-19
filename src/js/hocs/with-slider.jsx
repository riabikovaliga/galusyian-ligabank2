import React, { useState, useEffect } from "react";

import { SLIDER_PAGES, INTERVAL_CHANGES_SLIDE } from "../const";

const withSlider = (Component) => {
  const WithSlider = (props) => {
    const [currentPageIndex, setCurrentPage] = useState(0);

    const onGetNextPage = (directionSide) => {
      if (directionSide === "right") {
        currentPageIndex < SLIDER_PAGES.length - 1
          ? setCurrentPage(currentPageIndex + 1)
          : setCurrentPage(0);
      }
      if (directionSide === "left") {
        currentPageIndex !== 0
          ? setCurrentPage(currentPageIndex - 1)
          : setCurrentPage(SLIDER_PAGES.length - 1);
      }
    };

    useEffect(() => {
      let slidesChange = setInterval(() => {
        onGetNextPage("right");
      }, INTERVAL_CHANGES_SLIDE);

      return () => {
        clearInterval(slidesChange);
      };
    });

    return (
      <Component
        {...props}
        currentPage={SLIDER_PAGES[currentPageIndex]}
        currentPageIndex={currentPageIndex}
        onGetNextPage={onGetNextPage}
      />
    );
  };

  return WithSlider;
};

export default withSlider;
