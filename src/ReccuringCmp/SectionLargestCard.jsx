export default function SectionLargestCards({ classes, children }) {
  return (
    <section
      className={`font-customFont grid justify-center relative ${classes} `}
    >
      {children}
    </section>
  );
}
