import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { IconChevronRight } from "@tabler/icons-react";
import { Breadcrumb } from "./breadcrumb";
import "./style.css";

export default function Breadcrumb({
  breadcrumbs,
  title,
}: {
  breadcrumbs: Breadcrumb[];
  title: string;
}) {
  return (
    <>
      <div className="flex justify-center items-center w-full h-60 breadcrumb">
        <div>
          <h2 className="font-bold text-center text-[2rem] ">{trans(title)}</h2>
          <div className="flex items-center gap-0 text-center">
            {breadcrumbs.map(breadcrumb => {
              return (
                <>
                  <div className="flex items-center gap-0 text-center">
                    <Link
                      to={breadcrumb.url}
                      style={{
                        color:
                          breadcrumbs.indexOf(breadcrumb) !==
                          breadcrumbs.length - 1
                            ? "rgb(156 163 175)"
                            : "black",
                        fontSize: "20px",
                      }}>
                      {trans(breadcrumb.text)}
                    </Link>
                    {breadcrumbs.indexOf(breadcrumb) !==
                      breadcrumbs.length - 1 && (
                      <IconChevronRight color="rgb(156 163 175)" size="1rem" />
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
