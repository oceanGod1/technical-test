export default function PCmp({
  content,
  width,
  marginY,
  fSize,
  textColor,
  lHeight,
}) {
  return (
    <p
      className={`w-[${width}] my-${marginY} font-medium text-${fSize} text-${textColor} leading-[${lHeight}]`}
    >
      {content}
    </p>
    // <p className="w-[29.3rem] my-3 font-medium text-lg text-color4">
    //   Let's make your work easier and more organized, using the Taskio Dashboard
    //   with many of the latest features in managing work every day.
    // </p>
  );
}
