import Icon from "../icon";
import Image from "next/image";

import classes from "./item.module.css";

const PortfolioItem = ({ item }) => (
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
        <span className={classes.spin}>
          <Icon id="web" />
        </span>
        Visit
      </div>
    </div>
  </div>
);

export default PortfolioItem;
