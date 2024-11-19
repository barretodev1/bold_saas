"use client";

import { useEffect } from "react";

const SmoothScrollLinks = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = (event) => {
        event.preventDefault();

        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      };

      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach((link) => {
        link.addEventListener("click", handleScroll);
      });

      return () => {
        anchorLinks.forEach((link) => {
          link.removeEventListener("click", handleScroll);
        });
      };
    }
  }, []);

  return null; // Este componente não renderiza nada
};

export default SmoothScrollLinks;