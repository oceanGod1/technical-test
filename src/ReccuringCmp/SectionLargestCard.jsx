export default function SectionLargestCards({ classes, children }) {
  return (
    <section
      className={`px-[9%] font-customFont relative grid justify-center ${classes} `}
    >
      {children}
    </section>
  );
}
