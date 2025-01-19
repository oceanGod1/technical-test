import H2Cmp from "../../ReccuringCmp/h2Cmp";
import ListItems from "../../ReccuringCmp/ListItems";

const benefitArr = [
  { id: 1, content: "Free Consulting With Expert Saving Money" },
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
      <ListItems arr={benefitArr} ulClasses="gap-8" liClasses="gap-5" />
    </div>
  );
}
