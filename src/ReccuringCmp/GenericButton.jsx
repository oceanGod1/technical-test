export default function GenericButton({ handleChange, classes, content }) {
  return (
    <button onClick={handleChange} className={classes}>
      {content}
    </button>
  );
}
