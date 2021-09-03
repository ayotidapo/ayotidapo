import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button {...props} className={`f-2 ${classes.btn} ${props.className}`}>
      {props.loading ? "Loading..." : props.title}
    </button>
  );
};
export default Button;
