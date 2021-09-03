import Image from "next/image";
import cx from "classnames";
import classes from "./modalitem.module.css";

const ModalItem = ({ item, pos }) => {
  return (
    <div
      className={cx([classes.carous], {
        [classes.item_active]: item.pos === pos,
      })}
      key={item.title}
    >
      <div className={classes.gifdiv}>
        <Image src={item.image} alt="gif" width={200} height={400} />
      </div>
      <div className={classes.desc}>
        <h2 className="h2">{item.title}</h2>
        <p>{item.description}</p>
        <div className={classes.btn_div}>
          <button>View Code</button>
          <button>View Live</button>
        </div>
      </div>
    </div>
  );
};

export default ModalItem;
