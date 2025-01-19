export default function ParagraphHolder({ classes, content = "empty" }) {
  return <p className={classes}>{content}</p>;
}
