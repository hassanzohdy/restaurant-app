import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { Link } from "@mongez/react-router";
import { Post } from "apps/front-office/blog/utils";
import URLS from "apps/front-office/utils/urls";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div className="App">
        <Link
          to={URLS.blog.viewPost({
            id: 1,
            title: "Hello World",
            slug: "hello-world",
          } as Post)}>
          Go To Post Details Page
        </Link>
      </div>
    </>
  );
}
