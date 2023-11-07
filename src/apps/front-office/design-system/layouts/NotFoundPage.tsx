import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import styles from "./style.module.scss";

export default function NotFoundPage() {
  return (
    <>
      <Helmet title={trans("notFoundPage")} />
      <div className={styles.notFound}>
        {/* <h1>{trans("notfOUND")}</h1> */}
      </div>
    </>
  );
}
