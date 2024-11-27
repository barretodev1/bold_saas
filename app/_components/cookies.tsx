"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-zinc-500 text-white p-4 z-50">
      <div className="flex items-center justify-between">
        <p>
          Utilizamos cookies para melhorar sua experiência. Para mais
          informações, leia nossa{" "}
          <a href="/politica-de-cookies" className="underline">
            política de cookies
          </a>
          .
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleAccept}
            className="bg-violet-600 px-4 py-2 rounded text-white hover:bg-violet-300"
          >
            Aceitar
          </button>
          <button
            onClick={handleDecline}
            className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
