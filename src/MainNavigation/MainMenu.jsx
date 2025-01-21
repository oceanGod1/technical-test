import LinkButton from "../ReccuringCmp/LinkButton";
import MenuLink from "./MenuLink";

export default function MainMenu({ classes, childClasses }) {
  const mainMenuArr = [
    { id: 1, title: "Home" },
    { id: 2, title: "Product" },
    { id: 3, title: "FAQ" },
    { id: 4, title: "Blog" },
    { id: 5, title: "About Us" },
  ];
  return (
    <span
      className={`lg:w-customW7 lg:justify-between lg:items-center ${classes}`}
    >
      <div
        className={`lg:w-customW6 h-fit lg:flex lg:justify-between ${childClasses}`}
      >
        {mainMenuArr.map(({ id, title }) => (
          <MenuLink key={id} title={title} />
        ))}
      </div>
      <div
        className={`lg:w-customW5 h-fit lg:flex lg:justify-between items-center  ${childClasses}`}
      >
        <MenuLink title="Login" />
        <LinkButton
          content="Sign Up"
          classes="px-3 py-2 rounded-customRadius2 text-color9 text-base font-medium bg-primary"
        />
      </div>
    </span>
  );
}
