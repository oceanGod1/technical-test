export default function GenericButton({ href, classes, content, children }) {
  return (
    <a href="#" className={classes}>
      {children} {content}
    </a>
  );
}
