"use client";

import { useState, useEffect } from "react";
import { Languages, X } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const TranslateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    // Función para inicializar Google Translate
    const initializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        // Limpiar cualquier instancia anterior
        const existingElement = document.getElementById(
          "google_translate_element"
        );
        if (existingElement) {
          existingElement.innerHTML = "";
        }

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // idioma por defecto (inglés)
            includedLanguages: "en,es,fr,de,it,pt,zh,ja,ko,ru,ar", // idiomas disponibles
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      }
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;

    // Cargar el script de Google Translate solo si no está cargado
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Error cargando Google Translate");
      };
      document.head.appendChild(script);
    } else {
      // Si el script ya está cargado, inicializar inmediatamente
      initializeGoogleTranslate();
    }

    // Cleanup function
    return () => {
      const existingElement = document.getElementById(
        "google_translate_element"
      );
      if (existingElement) {
        existingElement.innerHTML = "";
      }
    };
  }, []);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
  ];

  const translatePage = (langCode: string) => {
    if (langCode === "en") {
      // Volver al idioma original (inglés)
      window.location.reload();
      return;
    }

    // Usar Google Translate si está disponible
    if (window.google && window.google.translate) {
      const translateElement = window.google.translate.TranslateElement;
      if (translateElement) {
        // Buscar el combo de Google Translate
        const combo = document.querySelector(
          ".goog-te-combo"
        ) as HTMLSelectElement;
        if (combo) {
          combo.value = langCode;
          combo.dispatchEvent(new Event("change"));
          setCurrentLang(langCode);
          return;
        }
      }
    }

    // Fallback: usar la URL de Google Translate
    const currentUrl = encodeURIComponent(window.location.href);
    const translateUrl = `https://translate.google.com/translate?sl=en&tl=${langCode}&u=${currentUrl}`;
    window.open(translateUrl, "_blank");
  };

  const toggleTranslate = () => {
    setIsOpen(!isOpen);

    // Si se está abriendo el panel y Google Translate está disponible
    if (!isOpen && window.google && window.google.translate) {
      // Esperar un poco para que el DOM se actualice
      setTimeout(() => {
        const existingElement = document.getElementById(
          "google_translate_element"
        );
        if (existingElement && existingElement.innerHTML === "") {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,fr,de,it,pt,zh,ja,ko,ru,ar",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
          setIsLoaded(true);
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleTranslate}
          className={`
            group relative p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out
            bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
            text-white hover:scale-110 hover:shadow-xl
            ${isOpen ? "bg-red-500 hover:bg-red-600" : ""}
          `}
          aria-label={isOpen ? "Cerrar traductor" : "Abrir traductor"}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Languages className="w-5 h-5" />
          )}

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            {isOpen ? "Cerrar traductor" : "Traducir página"}
            <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        </button>

        {/* Panel del traductor */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 min-w-[280px] border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom-2 duration-300">
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Traducir página
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Selecciona un idioma para traducir el contenido
              </p>
            </div>

            {/* Selector de idiomas personalizado */}
            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    translatePage(lang.code);
                    setCurrentLang(lang.code);
                  }}
                  className={`
                    w-full flex items-center justify-between px-3 py-2 rounded-md text-sm
                    transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700
                    ${
                      currentLang === lang.code
                        ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                        : "border border-transparent"
                    }
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {lang.name}
                    </span>
                  </div>
                  {currentLang === lang.code && (
                    <span className="text-blue-500 text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>

            {/* Contenedor oculto de Google Translate para funcionalidad */}
            <div id="google_translate_element" className="hidden"></div>

            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                🔄 Selecciona "English" para volver al idioma original
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Estilos personalizados para Google Translate */}
      <style jsx global>{`
        /* Ocultar elementos innecesarios del widget de Google Translate */
        .goog-te-banner-frame {
          display: none !important;
        }

        .goog-te-menu-value {
          color: #374151 !important;
        }

        .goog-te-gadget {
          font-family: inherit !important;
          font-size: 14px !important;
        }

        .goog-te-combo {
          margin: 0 !important;
          padding: 8px 12px !important;
          border: 1px solid #d1d5db !important;
          border-radius: 6px !important;
          background-color: white !important;
          color: #374151 !important;
          font-size: 14px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .goog-te-combo:focus {
          outline: none !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
        }

        /* Estilos para modo oscuro */
        .dark .goog-te-combo {
          background-color: #374151 !important;
          color: #f9fafb !important;
          border-color: #4b5563 !important;
        }

        .dark .goog-te-menu-value {
          color: #f9fafb !important;
        }

        /* Ocultar texto "Powered by" */
        .goog-te-gadget
          .goog-te-gadget-simple
          .goog-te-menu-value
          span:first-child {
          display: none;
        }

        /* Ocultar la barra superior de Google Translate */
        body {
          top: 0 !important;
        }

        #goog-gt-tt {
          display: none !important;
        }

        .goog-tooltip {
          display: none !important;
        }

        .goog-tooltip:hover {
          display: none !important;
        }

        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

export default TranslateButton;
