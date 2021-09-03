import cx from "classnames";
import classes from "./portfolio.module.css";
import { useState } from "react";
import Modal from "../modal";
import PortfolioItem from "./portfolioItem";
import modalItems from "./itemsInfo";
import ModalItem from "./modalItem";

const PortfolioPage = () => {
  const [pos, setPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const itemLen = modalItems.length;

  const onNavigate = (type, itemPos = pos) => {
    if (type === "incr" && itemPos < itemLen - 1) return setPos(itemPos + 1);
    if (type === "decr" && itemPos !== 0) return setPos(itemPos - 1);
  };

  const onToggle = (bool, pos) => {
    setIsOpen(bool);
    setPos(pos);
  };

  return (
    <div className={classes.container}>
      <Modal
        pos={pos}
        onNavigate={onNavigate}
        onToggle={onToggle}
        itemLen={itemLen}
        isOpen={isOpen}
      >
        <div className={cx([classes.modItemsDiv])}>
          {modalItems.map((item) => (
            <ModalItem item={item} key={item.title} pos={pos} />
          ))}
        </div>
      </Modal>
      <h2 className="h2 txt__cntr pi">Projects</h2>
      <div className={classes.Prj__wrapper}>
        {modalItems.map((item) => (
          <span onClick={() => onToggle(true, item.pos)} key={item.title}>
            <PortfolioItem item={item} />
          </span>
        ))}
      </div>
    </div>
  );
};
export default PortfolioPage;
