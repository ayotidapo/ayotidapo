import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import cx from "classnames";
import classes from "./modalitem.module.css";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const ModalItem = ({ item, pos }) => {
  const openPage = (url) => {
    window.open(url);
  };
  return (
    <div
      className={cx([classes.carous], {
        [classes.item_active]: item.pos === pos,
      })}
      key={item.title}
    >
      <div className={classes.gifdiv}>
        <Image
          src={item.descImg || item.image}
          alt="gif"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={classes.desc}>
        <h2 className="h2">{item.title}</h2>
        <pre className={classes.pre}>{item.description}</pre>
        <div className={classes.btn_div}>
          {!item.isPrivate && (
            <button onClick={() => openPage(item.github)}>
              <FontAwesomeIcon icon={faGithub} /> &nbsp;&nbsp;View Code
            </button>
          )}
          <button onClick={() => openPage(item.url)}>
            {" "}
            <FontAwesomeIcon icon={faGlobe} /> &nbsp;&nbsp;View Live
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalItem;
