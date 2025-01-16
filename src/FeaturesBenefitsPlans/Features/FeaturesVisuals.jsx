import H2Cmp from "../../ReccuringCmp/h2Cmp";
import PrimaryButton from "../../ReccuringCmp/PrimaryButton";

export default function Features() {
  return (
    <header className="h-fit col-span-3 flex justify-between items-center bg-red-400">
      <H2Cmp
        content="Our Features you can get"
        fSize="3.125rem"
        fontWeight="semibold"
        lHeight="3.78rem"
        width="20.69rem"
      />
      <PrimaryButton content="Get Started" />
    </header>
  );
}
