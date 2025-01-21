export default function MenuLink({ title }) {
  const handleClick = e => {
    const children = e.target.parentElement.children;
    for (let child of children) {
      const style = action => {
        child.classList[action]("text-secondary");
        child.classList[action]("text-lg");
      };
      child === e.target ? style("add") : style("remove");
    }
  };

  return (
    <a
      href="#"
      className="text-backup text-base font-medium"
      onClick={handleClick}
    >
      {title}
    </a>
  );
}
