import H2Cmp from "../ReccuringCmp/H2Cmp";
import ParagraphHolder from "../ReccuringCmp/ParagraphHolder";
import quote from "../assets/quote.png";
import review1 from "../assets/review1.png";
import review2 from "../assets/review2.png";
import review3 from "../assets/review3.png";
import review4 from "../assets/review4.png";
import play from "../assets/play.png";

const imageArr = [
  { id: 1, image: review1 },
  { id: 2, image: review2 },
  { id: 3, image: review3 },
  { id: 4, image: review4 },
  { id: 5, image: play },
];

export default function TopLeftCard() {
  return (
    <div className="relative grid gap-5">
      <H2Cmp
        content="People are Talking About What We Do"
        classes="font-semibold text-customFS2 leading-customLH3 text-white"
      />
      <ParagraphHolder
        classes="font-medium text-customLH5 text-backup"
        content="Everything you need to accept payments and grow your money from anywhere on the planet"
      />

      <img src={quote} alt="quotation mark" className="py-5" />
      <img
        src={quote}
        alt="quotation mark"
        className="absolute right-8 bottom-32 rotate-180"
      />

      <blockquote className="font-medium text-customLH5 text-backup">
        I am very helped by this E-wallet application, my days are very easy to
        use this application and its very helpful in my life, even I can pay a
        short time
      </blockquote>

      <ParagraphHolder
        classes="py-5 font-medium text-customLH5 text-backup"
        content="_Aria Z inanrio"
      />

      <figure className="pe-7 flex justify-between">
        {imageArr.map(({ id, image }) => {
          return <img key={id} src={image} alt={`reviewer ${id} photo`} />;
        })}
      </figure>
    </div>
  );
}
