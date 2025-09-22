"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadCVButton() {
  const handleDownload = () => {
    // Crear un elemento anchor temporal para descargar el archivo
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Dario_Flores_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
}
