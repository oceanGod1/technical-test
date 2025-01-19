import bulletPoint from "../assets/bullet-point.png";
import ParagraphHolder from "./ParagraphHolder";

export default function ListItems({
  arr,
  ulClasses,
  liClasses,
  imgClasses,
  pClasses,
  children,
}) {
  return (
    <ul className={`list-none flex flex-col ${ulClasses}`}>
      {arr.map(({ id, content }) => {
        return (
          <li key={id} className={`flex items-center ${liClasses}`}>
            <img src={bulletPoint} alt="bullet point" className={imgClasses} />
            <ParagraphHolder
              content={content}
              classes={`text-lg ${pClasses} text-secondary leading-customLH5`}
            />
          </li>
        );
      })}
      {children}
    </ul>
  );
}
