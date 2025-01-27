import unsplashIcon from "../../assets/unsplash-icon.png";
import notionIcon from "../../assets/notion-icon.png";
import intercomIcon from "../../assets/intercom-icon.png";
import descriptIcon from "../../assets/descript-icon.png";
import grammarlyIcon from "../../assets/grammarly-icon.png";
import H2Cmp from "../../ReccuringCmp/h2Cmp";

const socials = [
  { id: 1, src: unsplashIcon, alt: "unsplash icon" },
  { id: 2, src: notionIcon, alt: "notion icon" },
  { id: 3, src: intercomIcon, alt: "intercom icon" },
  { id: 4, src: descriptIcon, alt: "description icon" },
  { id: 5, src: grammarlyIcon, alt: "grammarly icon" },
];
export default function LandingFooter() {
  return (
    <footer className="my-16 row-start-5 col-span-2 md:row-start-4 lg:my-32">
      <H2Cmp
        content="More than 25,000 teams use Collabs"
        classes="lg:text-customFS1 text-center font-bold text-secondary"
      />
      <div className="mt-14 flex gap-9 justify-around flex-wrap">
        {socials.map(({ id, src, alt }) => (
          <img key={id} src={src} alt={alt} className="h-6 md:h-8 lg:h-auto" />
        ))}
      </div>
    </footer>
  );
}
