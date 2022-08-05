import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Include in page to automatically scroll to the top of the page on navigation
 * https://v5.reactrouter.com/web/guides/scroll-restoration
 * @constructor
 */
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window?.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// See https://github.com/michiganhackers/mh-web-new/issues/94
//  `window.scrollTo` isn't going to be added anytime soon
const disableIfTesting = (canvas) =>
  process.env.NODE_ENV === "test" ? () => null : canvas;

export default disableIfTesting(ScrollToTop);
