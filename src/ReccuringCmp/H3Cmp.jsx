export default function H3Cmp({ content = "empty", classes }) {
  return <h3 className={`text-lg md:text-2xl ${classes}`}>{content}</h3>;
}
