import ParagraphHolder from "./ParagraphHolder";

export default function CardSplashCmp({
  content1,
  content2,
  fontSize = "text-medium",
  parentClasses,
  child1Classes,
  children,
}) {
  return (
    <div
      className={`${parentClasses} p-4 shadow-customBS1 bg-white rounded-md items-center`}
    >
      <div className={child1Classes}>
        <h4 className="font-normal text-xs text-color5 text-nowrap">
          {content1}
        </h4>
        <ParagraphHolder
          content={content2}
          classes={`text-secondary font-medium ${fontSize} text-nowrap`}
        />
      </div>
      {children}
    </div>
  );
}
