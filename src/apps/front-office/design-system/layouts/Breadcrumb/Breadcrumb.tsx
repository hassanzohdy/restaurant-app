import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { IconChevronRight } from "@tabler/icons-react";
import styles from "./_Breadcrumb.module.scss";

export type BreadcrumbProps = {
  title: string;
  navItems: { name: string; url?: string }[];
};

export default function Breadcrumb({ title, navItems }: BreadcrumbProps) {
  return (
    <>
      <div
        className={` ${styles.breadcrumb} flex items-center min-h-[240px] py-10 max-sm:min-h-[180px]`}>
        <div className="container text-center">
          <h1 className="title font-bold text-[52px] mb-1 max-md:text-[42px] max-sm:text-[32px]">
            {trans(title)}
          </h1>
          <nav className="flex justify-center">
            <ol className="inline-flex items-center justify-center text-[15px]">
              <li className="flex items-center mr-1">
                <Link
                  to="/"
                  className="mr-1 text-gray-400 hover:text-primary-hover">
                  {trans("home")}
                </Link>
                <IconChevronRight strokeWidth="4" />
              </li>
              {navItems.map((item, index) => {
                if (item.url) {
                  return (
                    <li className="flex items-center mr-1" key={index}>
                      <Link to={item.url} className="mr-1 text-gray-400">
                        {trans(item.name)}
                      </Link>
                      <IconChevronRight strokeWidth="4" />
                    </li>
                  );
                } else {
                  return (
                    <li className="flex items-center" key={index}>
                      <span>{trans(item.name)}</span>
                    </li>
                  );
                }
              })}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
