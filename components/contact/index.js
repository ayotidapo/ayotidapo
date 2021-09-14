import { useReducer, useState } from "react";
import { toast } from "react-toastify";
import { getMediaWidth } from "../../helpers/function";
import axios from "axios";
import cx from "classnames";
import inputReducer from "./inputReducer";
import classes from "./contact.module.css";
import { BtnLoader } from "../../components/Roller";
import Input from "../../components/Input";
import { validateInput } from "../../helpers/function";
import Button from "../../components/Button";

const ContactForm = () => {
  const initialInputs = {
    name: {
      type: "text",
      name: "name",
      value: "",
      error: "",
      label: "Name",
      placeholder: "Name",
      required: true,
    },
    email: {
      type: "email",
      name: "email",
      value: "",
      error: "",
      label: "Email address",
      placeholder: "Email address",
      required: true,
    },
    subject: {
      type: "text",
      name: "subject",
      value: "",
      error: "",
      label: "Subject",
      placeholder: "Subject",
      required: true,
    },
    message: {
      type: "textarea",
      name: "message",
      value: "",
      error: "",
      label: "",
      placeholder: "Message",
      required: true,
    },
  };
  const [inputs, inputDispatch] = useReducer(inputReducer, initialInputs);
  const [hasError, setHasError] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (body) => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/notification`, body);
      console.log(initialInputs);
      inputDispatch({ type: "VALIDATE_INPUT", validatedInputs: initialInputs });
      const isMatch = getMediaWidth("(max-width: 425px)");
      if (isMatch) toast.success(`Message Sent!, Thanks I will get in touch`);
      setLoading(false);
      setSent(true);
    } catch (e) {
      setLoading(false);
      setSent(false);
    }
  };

  const checkError = () => {
    const noError = Object.keys(inputs).every(
      (field) =>
        !inputs[field].error && inputs[field].required && inputs[field].value
    );

    return noError;
  };

  const onChangeInput = (e) => {
    setSent(false);
    const { name, value } = e.target;
    if (value == 8) return false;
    inputDispatch({ type: "UPDATE_INPUT", name, value });
  };

  const onValidateInput = (field) => {
    const validatedInputs = validateInput(field, inputs);

    if (checkError()) setHasError(false);
    else setHasError(true);
    inputDispatch({ type: "VALIDATE_INPUT", validatedInputs });
  };

  const onSubmit = () => {
    const body = {};

    //if (Object.keys(body).length < 4) return false;

    Object.keys(inputs).forEach((field) => {
      body[field] = inputs[field].value;
    });

    submit(body);
  };

  return (
    <div className={classes.contact}>
      {sent && (
        <div className={classes.sent}>
          <h2>Message Sent!</h2> <p>Thanks,I&apos;ll get in touch</p>
        </div>
      )}
      <div className={cx([classes.formwrapper])}>
        <section style={{ color: "#fff" }}>
          <h2 className={`${classes.theader} co-pri mb-10`}>Get In touch</h2>
          <p className=" mt-10">
            This could be the start of something beautiful
          </p>
        </section>
        <div className={classes.input_wrapper}>
          <span>
            <Input
              field={inputs.name}
              onChange={(e) => onChangeInput(e)}
              onBlur={() => onValidateInput(inputs.name)}
            />
          </span>
          <span>
            <Input
              field={inputs.email}
              onChange={(e) => onChangeInput(e)}
              onBlur={() => onValidateInput(inputs.email)}
            />
          </span>
          <span>
            <Input
              field={inputs.subject}
              onChange={(e) => onChangeInput(e)}
              onBlur={() => onValidateInput(inputs.subject)}
            />
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Input
            field={inputs.message}
            onChange={(e) => onChangeInput(e)}
            onBlur={() => onValidateInput(inputs.message)}
          />
        </div>
        <Button
          title={loading ? <BtnLoader /> : "Send"}
          onClick={onSubmit}
          disabled={hasError || loading}
        />
      </div>
    </div>
  );
};

export default ContactForm;
