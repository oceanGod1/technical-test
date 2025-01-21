import ParagrapLikeButton from "../../ReccuringCmp/ParagraphLikeButton";
import GenericButton from "../../ReccuringCmp/GenericButton";
export default function GenericDuration({ toggle, handleBillingChange }) {
  const containerStyle = toggle ? "flex-row" : "flex-row-reverse";
  const buttonContent = (content1, content2) => (toggle ? content1 : content2);

  return (
    <div
      className={`w-fit p-2 z-50 rounded-customRadius2 shadow-customBS1 bg-white flex ${containerStyle} self-start items-center justify-self-center`}
    >
      <GenericButton
        handleChange={handleBillingChange}
        content={buttonContent("Bill Monthly", "Bill Yearly")}
        classes="w-24 lg:w-40 text-sm text-secondary lg:text-lg font-medium text-center"
      />
      <ParagrapLikeButton
        content={buttonContent("Bill Yearly", "Bill Monthly")}
        classes="w-24 h-9 lg:h-14 text-sm lg:w-40 rounded-customRadius2 shadow-customBS1 lg:text-lg font-medium bg-primary grid place-items-center"
      />
    </div>
  );
}
