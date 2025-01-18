import GenericButton from "../../ReccuringCmp/GenericButton";
import MenuLink from "./MenuLink";

export default function MainMenu() {
  const mainMenuArr = [
    { id: 1, title: "Home" },
    { id: 2, title: "Product" },
    { id: 3, title: "FAQ" },
    { id: 4, title: "Blog" },
    { id: 5, title: "About Us" },
  ];
  return (
    <span className="w-customW7 flex justify-between items-center">
      <div className="w-customW6 h-fit flex justify-between">
        {mainMenuArr.map(({ id, title }) => (
          <MenuLink key={id} title={title} />
        ))}
      </div>
      <div className="w-customW5 h-fit flex justify-between items-center">
        <MenuLink title="Login" />
        <GenericButton
          content="Sign Up"
          classes="px-3 py-2 rounded-customRadius2 text-color9 text-base font-medium bg-primary"
        />
      </div>
    </span>
  );
}
