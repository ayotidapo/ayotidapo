import classes from "./roller.module.css";

const Roller = () => <span className={classes.btn__loader} />;
export default Roller;

export const BtnLoader = () => (
  <span className={`${classes.btn__loader} ${classes.btn__loader_load}`} />
);
