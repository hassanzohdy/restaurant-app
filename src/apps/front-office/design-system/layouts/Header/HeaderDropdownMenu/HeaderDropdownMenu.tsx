import { Link } from "@mongez/react-router";

export type HeaderDropdownMenuProps = {
  items?: { name: string; href: string }[]
};
export default function HeaderDropdownMenu({items}: HeaderDropdownMenuProps) {
  return (
    <>
    <div className="dropdown-menu">
      <ul>
      {items?.map((item) => (
          <li className="dropdown-item" key={item.name}
          >
            <Link
              key={item.name}
              to={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
}
