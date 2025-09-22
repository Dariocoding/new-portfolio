import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
import { cn } from "@/lib/utils";

type Props = {
  containerStyles?: string;
  btnStyles?: string;
  iconStyles?: string;
};

export default function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconStyles,
}: Props) {
  const swiper = useSwiper();
  return (
    <div className={cn(containerStyles)}>
      <button className={cn(btnStyles)} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={cn(iconStyles)} />
      </button>
      <button className={cn(btnStyles)} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={cn(iconStyles)} />
      </button>
    </div>
  );
}
