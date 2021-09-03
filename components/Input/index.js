import cx from "classnames";
import classes from "./input.module.css";

const Input = (props) => {
  const { field } = props;
  const { label, placeholder, type, name, value, error } = field;

  if (type === "textarea")
    return (
      <>
        <label className={classes.t_area_div}>
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            {...props}
            className={`${props.className}`}
            style={{ borderBottom: error && "2px solid red" }}
          ></textarea>
        </label>
        <span className="error-text">{error}</span>
      </>
    );
  return (
    <>
      <label className={classes.txt_wrap}>
        <input
          type={type}
          name={name}
          value={value}
          required={field.required}
          placeholder={placeholder}
          {...props}
          className={`${classes.input_text} ${props.className}`}
        />
        <span className={classes.label}>{label}</span>
        <span
          className={cx([classes.bd_btm], {
            [classes.show_bd]: field.value,
            [classes.bd_btm_err]: field.error,
          })}
        />
      </label>
      <span className="error-text">{error}</span>
    </>
  );
};
export default Input;
