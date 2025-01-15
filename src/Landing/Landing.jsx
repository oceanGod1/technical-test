import Navigation from "./Navigation/Navigation";

export default function Landing() {
  return (
    <main className="w-screen h-[130vh] m-0 px-[9%] font-sans grid grid-cols-2 bg-gradient-to-bl from-[#d4d4d4aa] to-white relative before:content-[''] before:-z-10 before:absolute before:w-full before:h-full before:bg-[linear-gradient(to_bottom_right,#54bd9548_10%,#ffffff_40%,#ffffff_60%,#54bd9532_70%)]">
      <Navigation />
    </main>
  );
}
