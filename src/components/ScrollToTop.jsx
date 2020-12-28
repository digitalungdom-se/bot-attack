import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

// Wrapper that simpily scrolls to the top of the page when a Link is clicked
const ScrollToTop = ({ location, children }) => {
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    if (location !== prevLocation) {
      window.scrollTo(0, 0);
      setPrevLocation(location);
    }
  }, [location, prevLocation, setPrevLocation]);

  return children;
};

export default withRouter(ScrollToTop);
