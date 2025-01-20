import NavList from "./NavList";
const footerNavArr = [
  {
    id: 1,
    heading: "Support",
    content: [
      { id: 1, item: "Help center" },
      { id: 2, item: "Account Information" },
      { id: 3, item: "About" },
      { id: 4, item: "Contact us" },
    ],
  },

  {
    id: 2,
    heading: "Help and Solution",
    content: [
      { id: 1, item: "Talk to support" },
      { id: 2, item: "Support docs" },
      { id: 3, item: "System status" },
      { id: 4, item: "Covid response" },
    ],
  },

  {
    id: 3,
    heading: "Product",
    content: [
      { id: 1, item: "Update" },
      { id: 2, item: "Security" },
      { id: 3, item: "Best test" },
      { id: 4, item: "Pricing product" },
    ],
  },
];

export default function BottomRighCard() {
  return (
    <nav className="pt-24 flex justify-between">
      {footerNavArr.map(({ id, heading, content }) => (
        <NavList key={id} heading={heading} content={content} />
      ))}
    </nav>
  );
}
