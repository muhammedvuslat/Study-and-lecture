export const initialState = {
  catImage: "",
  error: "",
  loading: false,
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    case "SUCCES":
      return { ...state, catImage: action.payload, error: "", loading: false };
    case "FAIL":
      return { ...state, catImage: "", error: action.payload, loading: false };
    default:
      break;
  }
};
