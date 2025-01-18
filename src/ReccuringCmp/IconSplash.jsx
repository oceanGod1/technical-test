export default function IconSplach({
  image,
  figClasses,
  imgClasses,
  description,
}) {
  return (
    <figure className={`${figClasses} grid place-content-center`}>
      <img src={image} alt={description} className={imgClasses} />
    </figure>
  );
}
