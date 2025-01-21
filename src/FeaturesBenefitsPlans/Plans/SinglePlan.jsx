import GenericButton from "../../ReccuringCmp/GenericButton";
import H2Cmp from "../../ReccuringCmp/h2Cmp";
import H3Cmp from "../../ReccuringCmp/H3Cmp";
import ListItems from "../../ReccuringCmp/ListItems";
import ParagraphHolder from "../../ReccuringCmp/ParagraphHolder";

export default function SinglePlan({
  liClasses,
  contentH2,
  contentH3,
  classesH3,
  contentP,
  classesP,
  centerPro,
  buttonContent,
  buttonClasses,
  planFeatures,
  featuresCardClasses,
  children,
}) {
  return (
    <li
      className={`w-fit z-0 p-4 pt-9 rounded-customRadius3 shadow-customBS1 relative overflow-hidden grid gap-4 justify-items-center ${liClasses} ${centerPro}`}
    >
      <header className=" grid gap-2 justify-items-center">
        <H3Cmp
          content={contentH3}
          classes={`font-semibold lg:text-customFS4 lg:leading-LH8 ${classesH3}`}
        />
        <ParagraphHolder
          content={contentP}
          classes={`w-40 md:w-60 font-medium text-sm md:text-base lg:text-lg lg:leading-customLH9 text-center ${classesP}`}
        />
        <div className="relative top-2">
          <ParagraphHolder
            content="$"
            classes={`xl:w-customW10 font-medium text-sm md:text-base text-lg leading-customLH9 absolute -left-4 ${classesP}`}
          />
          <H2Cmp
            content={contentH2}
            classes={`font-semibold lg:text-customFS2 leading-LH5 text-center ${classesH3}`}
          />
        </div>
      </header>
      <ListItems
        arr={planFeatures}
        ulClasses={`xl:w-customW12 px-7 py-6 rounded-customRadius2 gap-6 ${featuresCardClasses}`}
        liClasses="gap-4"
        imgClasses="w-customW11"
        pClasses="font-medium text-sm"
      >
        <GenericButton
          content={buttonContent}
          classes={`py-4 rounded-customRadius3 lg:text-lg font-semibold text-center shadow-customBS1 ${buttonClasses}`}
        />
      </ListItems>
      {children}
    </li>
  );
}
