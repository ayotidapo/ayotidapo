import { useEffect } from "react";
import cx from "classnames";
import classes from "./modal.module.css";
import Icon from "../icon";
const Modal = (props) => {
  const { onToggle, isOpen, onNavigate, itemLen, pos } = props;
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <div className={cx([classes.modal], { [classes.showModal]: isOpen })}>
      <span className={classes.closeIcon} onClick={() => onToggle(false)}>
        <Icon id="close" />
      </span>
      <div className={classes.modal_wrapper}>
        <span
          className={cx([classes.leftIcon], {
            disabled: pos === 0,
          })}
          onClick={() => onNavigate("decr", pos)}
        >
          <Icon id="left-caret" />
        </span>
        <span
          className={cx([classes.rytIcon], {
            disabled: pos === itemLen - 1,
          })}
          onClick={() => onNavigate("incr", pos)}
        >
          <Icon id="right-caret" />
        </span>
        <div className={classes.child_wrapper}>{props.children}</div>
      </div>
    </div>
  );
};
export default Modal;
