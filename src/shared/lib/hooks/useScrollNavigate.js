import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Hook for scrolling the page to its original position during navigation */
const useScrollNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default useScrollNavigate;
