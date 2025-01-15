export default function MenuLink({ title }) {
  const handleClick = e => {
    const children = e.target.parentElement.children;
    for (let child of children) {
      child === e.target
        ? child.classList.add("text-secondary")
        : child.classList.remove("text-secondary");
    }
  };

  return (
    <a
      href="#"
      className="text-backup text-[1.125rem] font-medium"
      onClick={handleClick}
    >
      {title}
    </a>
  );
}
