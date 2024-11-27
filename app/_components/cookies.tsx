"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CookieBanner = () => {
  const router = useRouter();
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
  
  const handleCookies = () => {
    router.push('/pages/cookies')
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] bg-zinc-500 bg-opacity-50 sm:w-[50%] bg-zinc-500 bg-opacity-70 text-black p-4 z-50 flex flex-col md:flex-row items-center">
      <span className="font-bold text-sm sm:w-[80%]">
        Usamos cookies para personalizar a sua experiência. Ao utilizar nossos
        sites e serviços, você concorda com o uso de cookies por nossa parte
        conforme estabelecido na nossa{" "}
        <a
          onClick={handleCookies}
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer"
        >
          Política de privacidade
        </a>
        .
      </span>
      <button
      onClick={handleAccept}
      className="bg-violet-600 flex items-center justify-center text-white py-2 px-4 mt-4 w-[80vw] sm:w-36 hover:bg-violet-800"
      type="button"
    >
      OK
    </button>
    </div>
  );
};

export default CookieBanner;
