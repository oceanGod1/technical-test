import bulletPoint from "../../assets/bullet-point.png";
import H2Cmp from "../../ReccuringCmp/h2Cmp";
import PCmp from "../../ReccuringCmp/PCmp";

const benefitArr = [
  { id: 1, content: "Free Consulting With Experince Saving Money" },
  { id: 2, content: "Online Banking" },
  { id: 3, content: "Investment Report Every Month" },
  { id: 4, content: "Saving Money For The Future" },
  { id: 5, content: "Online Transaction" },
];

export default function BenefitsLeftCard() {
  return (
    <div className="grid gap-12 content-start">
      <H2Cmp
        content="What Benefit Will You Get?"
        classes="w-customW2 text-customFS2 font-bold leading-customLH3 text-secondary"
      />
      <div className="flex flex-col gap-8">
        {benefitArr.map(({ id, content }) => {
          return (
            <div key={id} className="flex gap-5 items-center">
              <img src={bulletPoint} alt="bullet point" />
              <PCmp
                content={content}
                classes="text-lg text-secondary leading-customLH5"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
