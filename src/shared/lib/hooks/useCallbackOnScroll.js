import { useCallback, useEffect, useRef } from "react";

/** Hook that calls the callback function when scrolling
 * @param {function} callback - callback function
 * @param {boolean} skip - value for skipping the request
*/
const useCallbackOnScroll = (callback, { skip }) => {
  const observer = useRef(null);

  const handleCallback = useCallback(
    (entries) => {
      if (entries.length === 0) return;

      if (entries[0].isIntersecting && !skip) {
        callback();
      }
    },
    [callback, skip],
  );

  const observedRef = useCallback(
    (node) => {
      if (!node) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(handleCallback);
      observer.current.observe(node);
    },
    [handleCallback],
  );

  useEffect(() => () => {
    if (observer.current) observer.current.disconnect();
  }, []);

  return observedRef;
};

export default useCallbackOnScroll;
