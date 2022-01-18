import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Include in page to automatically scroll to the top of the page on navigation
 * https://v5.reactrouter.com/web/guides/scroll-restoration
 * @constructor
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
