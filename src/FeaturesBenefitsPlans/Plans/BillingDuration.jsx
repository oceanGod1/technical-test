import ParagrapLikeButton from "../../ReccuringCmp/ParagraphLikeButton";
import GenericButton from "../../ReccuringCmp/GenericButton";
export default function GenericDuration({ toggle, handleBillingChange }) {
  const containerStyle = toggle ? "flex-row" : "flex-row-reverse";
  const buttonContent = (content1, content2) => (toggle ? content1 : content2);

  return (
    <div
      className={`w-fit p-2 rounded-customRadius2 shadow-customBS1 bg-white flex ${containerStyle} self-start items-center justify-self-center`}
    >
      <GenericButton
        handleChange={handleBillingChange}
        content={buttonContent("Bill Monthly", "Bill Yearly")}
        classes="w-40 text-secondary text-lg font-medium text-center"
      />
      <ParagrapLikeButton
        content={buttonContent("Bill Yearly", "Bill Monthly")}
        classes="w-40 h-14 rounded-customRadius2 shadow-customBS1 text-lg font-medium bg-primary grid place-items-center"
      />
    </div>
  );
}
