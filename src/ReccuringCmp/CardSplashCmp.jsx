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
      className={`${parentClasses} p-4 shadow-[0px_4px_9px_#00000015] bg-white rounded-md items-center`}
    >
      <div className={child1Classes}>
        <h4 className="font-normal text-xs text-color5 text-nowrap">
          {content1}
        </h4>
        <p className={`text-secondary font-medium ${fontSize} text-nowrap`}>
          {content2}
        </p>
      </div>
      {children}
    </div>
  );
}
