export default function NavList({ heading, content }) {
  return (
    <ul className="h-fit grid gap-4">
      <li>
        <a href="#" className="font-medium text-customLH5 text-white">
          {heading}
        </a>
      </li>
      {content.map(({ id, item }) => {
        return (
          <li key={id}>
            <a href="#" className="font-medium text-customLH5 text-backup">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
