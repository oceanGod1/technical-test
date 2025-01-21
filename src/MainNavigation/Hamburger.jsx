export default function ({ handleCurtain, activeCurtain }) {
  const styles = activeCurtain
    ? "before:bg-primary before:rotate-[40deg] before:origin-bottom-left after:bg-primary after:rotate-[-40deg] after:origin-top-left"
    : "before:bg-backup after:bg-backup";
  const childStyles = activeCurtain ? "opacity-0" : "opacity-100";

  return (
    <div
      className={`z-20 w-6 h-5 p-1 box-content justify-self-end flex flex-col justify-between cursor-pointer content-[''] before:w-6 before:h-1 before:duration-300 before:ease-in after:w-6 after:h-1 after:duration-300 after:ease-in lg:hidden ${styles}`}
      onClick={handleCurtain}
    >
      <div
        className={`w-6 h-1 bg-backup duration-300 ease-in ${childStyles}`}
      ></div>
    </div>
  );
}
