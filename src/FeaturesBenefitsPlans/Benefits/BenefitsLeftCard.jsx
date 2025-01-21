import H2Cmp from "../../ReccuringCmp/h2Cmp";
import ListItems from "../../ReccuringCmp/ListItems";

const benefitArr = [
  { id: 1, content: "Free Consulting With Expert Saving Money" },
  { id: 2, content: "Online Banking" },
  { id: 3, content: "Investment Report Every Month" },
  { id: 4, content: "Saving Money For The Future" },
  { id: 5, content: "Online Transaction" },
];

export default function BenefitsLeftCard({ classes }) {
  return (
    <div className={`${classes} grid gap-4 lg:gap-12 content-start`}>
      <H2Cmp
        content="What Benefit Will You Get?"
        classes="lg:w-customW2 lg:text-customFS2 text-start font-bold lg:leading-customLH3 text-secondary"
      />
      <ListItems
        arr={benefitArr}
        ulClasses="gap-4 lg:gap-8"
        liClasses="gap-5"
      />
    </div>
  );
}
