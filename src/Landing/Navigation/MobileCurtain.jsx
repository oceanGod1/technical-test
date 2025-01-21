import MainMenu from "./MainMenu";

export default function MobileCurtain({ activeCurtain }) {
  const activateCurtainStyle = activeCurtain
    ? "left-0 before:bg-[#00000010]"
    : "-left-[110vw] before:bg-transparent";

  return (
    <section
      className={`z- h-screen w-screen fixed top-0 grid grid-cols-4 duration-300 ease-in-4 lg:hidden ${activateCurtainStyle} content-[""] before:-z-10 before:w-full before:h-full before:absolute before:delay-200 before:duration-300 before:ease-in-4`}
    >
      <div className="h-full pt-16 bg-color9 col-span-4 sm:col-span-3 ">
        <MainMenu
          classes="grid grid-rows-[auto_1fr] gap-12"
          childClasses="grid justify-items-center gap-3"
        />
      </div>
    </section>
  );
}
