/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { ImageResponse } from "next/og";
import { SiReact } from "react-icons/si";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Darío Flores | Portafolio Personal",
  description:
    "¡Bienvenido al sitio web de mi portafolio! Soy un desarrollador full-stack experto con experiencia en Next.js, Nest.js, PostgreSQL, MySQL y más. Explore mis proyectos que muestran interfaces elegantes, sistemas back-end robustos y gestión eficiente de bases de datos. Colaboremos en su próximo extraordinario proyecto de desarrollo web.",
};

export const runtime = "edge";

export const alt = "Darío Flores Portfolio";
export const size = {
  width: 1800,
  height: 800,
};

export const contentType = "image/png";

export default async function Image() {
  const poppinsSemiBold = fetch(
    new URL("../public/fonts/Poppins-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="w-full h-full relative flex items-center px-40 py-11 bg-[#020617]">
        <div tw="relative w-full h-full flex border-[3.5px] rounded-[45px] border-[#323A46] bg-black px-16 py-16 ">
          <div tw="flex w-full justify-center items-center">
            <div tw="flex absolute top-0 left-0">
              <div tw="relative flex rounded-full items-center overflow-hidden w-36 h-36">
                <img
                  src={process.env.SITE_URL + "/images/dario.jpeg"}
                  alt="Alfonzo's portfolio image background"
                  tw="w-full h-full"
                />
              </div>
              <div tw="flex flex-col ml-10">
                <h2 tw="text-white text-7xl font-extrabold">Darío Flores</h2>
                <h3 tw="text-[#A2B2CE] text-5xl -mt-3">@DarioDev</h3>
              </div>
            </div>
            <div tw="absolute right-0 flex flex-col text-7xl text-white font-extrabold top-0 mr-0">
              <div tw="flex">
                {"<"}
                <span tw="text-white">Dario.dev</span>
                {"/>"}
              </div>
              <div tw="flex ml-10 items-center justify-center">
                <div tw="flex fill-blue-100 mr-5">
                  {/* @ts-ignore */}
                  <SiReact styles="fill-zinc-800 mr-5" />
                </div>
                <div tw="flex fill-blue-100 mr-5">
                  {/* @ts-ignore */}
                  <BiLogoTypescript styles="fill-blue-100 mr-5" />
                </div>
                <div tw="flex fill-blue-100 mr-5">
                  {/* @ts-ignore */}
                  <BiLogoTailwindCss styles="fill-[#00D8FF] mr-5" />
                </div>
              </div>
            </div>
            <div tw="absolute flex flex-col justify-center items-center">
              <h2
                tw="text-white text-[170px] mt-30"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(57, 175, 226), rgb(0, 151, 252), rgb(18, 135, 194))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Desarrollador
              </h2>
            </div>
            <div tw="absolute text-white bottom-0 w-full flex flex-row justify-center items-center">
              <div tw="flex text-teal-500 mr-8">
                {/* @ts-ignore */}
                <BsWhatsapp tw="text-teal-500 w-14 h-14" />
              </div>
              <p tw="text-white text-6xl">+58 0424-3177990</p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Poppins",
          data: await poppinsSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
      emoji: "twemoji",
    }
  );
}
