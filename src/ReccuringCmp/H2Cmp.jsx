export default function H2Cmp({ classes, content = "empty" }) {
  return <h2 className={`text-2xl md:text-3xl ${classes}`}>{content}</h2>;
}
