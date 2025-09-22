import Photo from "@/components/photo";
import Socials from "@/components/socials";
import Stats from "@/components/Stats";
import DownloadCVButton from "@/components/DownloadCVButton";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />{" "}
              <span className="text-accent">Darío Flores</span>
            </h1>
            <p className="max-w-[450px] mb-9 text-white/80 mx-auto xl:mx-0">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadCVButton />
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 mb-6 xl:mb-0 xl:order-none">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
