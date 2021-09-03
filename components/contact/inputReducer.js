const initialInputs = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return { ...updateInputFunc(state, action) };
    case "VALIDATE_INPUT":
      return { ...action.validatedInputs };
    default:
      return state;
  }
};
export default initialInputs;

const updateInputFunc = (state, action) => {
  const { name, value } = action;
  const State = { ...state };
  State[name].value = value;
  State[name].error = "";
  return State;
};
