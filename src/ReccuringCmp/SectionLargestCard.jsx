export default function SectionLargestCards({ classes, children }) {
  return (
    <section className={`px-[9%] font-customFont grid relative ${classes} `}>
      {children}
    </section>
  );
}
