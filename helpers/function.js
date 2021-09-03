export const validateInput = (field, fields) => {
  const emailRegex = /^[a-zA-Z_][-_a-zA-Z0-9.]*@[a-zA-Z]+\.[a-zA-Z]+/;
  const { name, value, required, type } = field;
  if (required && !value) {
    fields[name].error = `Field is required`;
  } else if (name === "email" && !emailRegex.test(value)) {
    fields[name].error = `Enter valid email address`;
  } else if (name === "message" && value.length < 5) {
    fields[
      name
    ].error = `Message is too short, well descriptive message will be appreciated`;
  }

  return fields;
};

export const getMediaWidth = (query) => {
  const mq = window.matchMedia(query);
  if (mq.matches) {
    return true;
  }
  return false;
};
