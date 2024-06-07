import { useEffect } from "react";

export const useScrollHandler = (
  sidebarContentRef: React.RefObject<HTMLDivElement>,
  sidebarRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (sidebarContentRef.current && sidebarRef.current) {
        const scrollTop = window.scrollY; // current scroll position
        const viewportHeight = window.innerHeight; // viewport height
        const contentHeight =
          sidebarContentRef.current.getBoundingClientRect().height; // current content height
        const sidebarTop =
          sidebarRef.current.getBoundingClientRect().top + window.scrollY; // distance from top to sidebar

        if (scrollTop >= contentHeight - viewportHeight + sidebarTop) {
          sidebarContentRef.current.style.transform = `translateY(-${
            contentHeight - viewportHeight + sidebarTop
          }px)`;
          sidebarContentRef.current.style.position = "fixed";
        } else {
          sidebarContentRef.current.style.transform = "";
          sidebarContentRef.current.style.position = "";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sidebarContentRef, sidebarRef]);
};