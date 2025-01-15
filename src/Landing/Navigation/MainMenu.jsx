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
    <span className="w-[43rem] flex justify-between items-center">
      <div className="w-[25.5rem] h-fit flex justify-between">
        {mainMenuArr.map(({ id, title }) => (
          <MenuLink key={id} title={title} />
        ))}
      </div>
      <div className="w-[10rem] h-fit flex justify-between items-center">
        <MenuLink title="Login" />
        <a
          href="#"
          className="px-3 py-2 rounded-[0.625rem] text-[#f8f8fa] text-[1.125rem] font-medium bg-primary"
        >
          Sign Up
        </a>
      </div>
    </span>
  );
}
