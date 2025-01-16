import LeftHalf from "./LeftHalf/LeftHalf";
import RightHalf from "./RightHalf/RightHalf";

export default function Ratings() {
  return (
    <section className="h-[33.8125rem] px-[9%] bg-color4 font-customFont grid grid-cols-[minmax(1rem,39.4rem)_minmax(1rem,29.72rem)] grid-rows-[4rem_auto_auto] justify-center">
      <LeftHalf />
      <RightHalf />
    </section>
  );
}
