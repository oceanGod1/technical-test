import LinkCmp from "./LinkCmp";
import InlineCard from "./InlineCard";

export default function CompanyLogo() {
  return (
    <InlineCard>
      <LinkCmp
        href="#"
        content="Biccas"
        classes="text-primary text-[3.125rem] leading-[1.875rem] tracking-wide font-semibold"
      />
    </InlineCard>
  );
}
