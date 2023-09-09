import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { Link } from "@mongez/react-router";
import { Post } from "apps/front-office/blog/utils";
import { getHome } from "apps/front-office/home/services/home-service";
import URLS from "apps/front-office/utils/urls";
import { useState } from "react";
import "./HomePage.scss";

export default function HomePage() {
  const [data, setData] = useState({
    isLoading: true,
    data: undefined,
    error: undefined,
  });

  useOnce(() => {
    getHome()
      .then(response => {
        setData({
          isLoading: false,
          data: response.data,
          error: undefined,
        });
      })
      .catch(error => {
        setData({
          isLoading: false,
          data: undefined,
          error,
        });
      });
  });

  if (data.isLoading) {
    return <div>Loading...</div>;
  }

  if (data.error) {
    return <div>Error</div>;
  }

  // Render the home page

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

// HOC
