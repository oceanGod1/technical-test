export default function LinkCmp({ href, classes, content, children, onClick }) {
  return (
    <a href={href} className={classes} onClick={onClick}>
      {content}
      {children}
    </a>
  );
}
