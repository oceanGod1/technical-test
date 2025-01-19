import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";

export default function LikertScale({ ratingStars, ratingScore, clientName }) {
  return (
    <figure>
      <img src={ratingStars} alt="number of rating stars" />
      <figcaption className="my-4 font-medium text-base text-secondary">
        <span className="font-bold text-lg">{ratingScore}</span> / 5 rating
      </figcaption>
      <ParagraphHolder
        classes="font-bold text-lg text-backup"
        content={clientName}
      />
    </figure>
  );
}
