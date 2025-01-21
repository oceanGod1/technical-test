import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";

export default function LikertScale({ ratingStars, ratingScore, clientName }) {
  return (
    <figure className="grid justify-center">
      <img src={ratingStars} alt="number of rating stars" />
      <figcaption className=" text-center my-4 font-medium text-base text-secondary md:text-start">
        <span className="font-bold text-lg">{ratingScore}</span> / 5 rating
      </figcaption>
      <ParagraphHolder
        classes="text-center font-bold text-lg text-backup md:text-start"
        content={clientName}
      />
    </figure>
  );
}
