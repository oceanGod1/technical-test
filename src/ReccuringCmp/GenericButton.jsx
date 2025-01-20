export default function GenericButton({
  handleChange,
  classes,
  content,
  children,
}) {
  return (
    <button onClick={handleChange} className={classes}>
      {children} {content}
    </button>
  );
}
