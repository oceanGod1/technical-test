export default function H2Cmp({
  content,
  fSize,
  tAlign,
  lHeight,
  width,
  fontWeight = "bold",
}) {
  return (
    <h2
      className={`w-[${width}] font-${fontWeight} text-[${fSize}] text-${tAlign} leading-[${lHeight}] text-secondary`}
    >
      {content}
    </h2>
    // <h2 className="w-[20.69rem] font-bold text-[2.5rem] text-center leading-[3.78rem] text-secondary">
    //   More than 25,000 teams use Collabs
    // </h2>
  );
}
