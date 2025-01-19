export default function LinkButton({ href, classes, content, children }) {
  return (
    <a href="#" className={classes}>
      {children} {content}
    </a>
  );
}
