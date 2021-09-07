import Icon from "../icon";
import { useRouter } from "next/router";
import Image from "next/image";

import classes from "./item.module.css";

const PortfolioItem = ({ item }) => {
  const router = useRouter();

  const openApp = (e, i) => {
    e.stopPropagation();

    if (!i?.url) return router.replace("/");

    window.open(i.url);
  };

  return (
    <div className={classes.item}>
      <div className={classes.img__cont}>
        <Image
          src={item.image}
          alt="eyowo"
          width={560}
          height={320}
          className={classes.item_img}
          layout="responsive"
        />
      </div>
      <div className={classes.overlay}>
        Project info
        <Icon id="info" />
      </div>
      <div className={classes.excerpt}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className={classes.web}>
          <span onClick={(e) => openApp(e, item)}>
            <Icon id="web" className={classes.spin} />
            Visit
          </span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
