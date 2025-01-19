import ParagraphHolder from "./ParagraphHolder";

export default function ParagraphLikeButton({ content, classes }) {
  return (
    <ParagraphHolder content={content} classes={`text-white ${classes}`} />
  );
}
