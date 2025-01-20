import GenericButton from "../ReccuringCmp/GenericButton";
import headingIcon from "../assets/form-heading-icon.png";
import H3Cmp from "../ReccuringCmp/H3Cmp";

export default function TopRightForm() {
  return (
    <form className="px-[5.37rem] pt-10 rounded-customRadius3 bg-color12 grid content-start gap-4">
      <img
        src={headingIcon}
        alt="image of stacked coins"
        className="justify-self-center"
      />
      <H3Cmp
        content="Get Started"
        classes="text-center font-medium text-customFS4 text-white leading-[2rem]"
      />
      <label
        htmlFor="enterEmail"
        className="text-lg font-medium text-white leading-[1.3rem]"
      >
        Email
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="p-4 rounded-customRadius2 text-sm"
      />

      <label
        htmlFor="enterEmail"
        className="text-lg font-medium text-white leading-[1.3rem]"
      >
        Message
      </label>
      <textarea
        name=""
        id=""
        placeholder="What are you saying ?"
        className="p-4 rounded-customRadius2 text-sm"
      ></textarea>
      <GenericButton
        content="Request Demo"
        classes="p-4 rounded-customRadius2 text-base font-normal text-white leading-[19.3px] bg-primary"
      />
      <a href="#" className="text-sm font-medium text-white justify-self-end">
        <span className="text-backup">or</span> Start Free Trial
      </a>
    </form>
  );
}
