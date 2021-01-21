const initialeState = {};

const characterReducer = (state = initialeState, action) => {
  switch (action.type) {
    case "GET_DATA_CHARACTER":
      return { ...state, dataCharacter: action.payload };

    default:
      return state;
  }
};

export default characterReducer;
