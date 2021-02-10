const initialeState = { chemise: 15 };

const marvelReducer = (state = initialeState, action) => {
  switch (action.type) {
    case "GET_DATA_CHARACTER":
      return { ...state, dataCharacter: action.payload };
    case "GET_DATA_COMIC":
      return { ...state, dataComic: action.payload };

    default:
      return state;
  }
};

export default marvelReducer;
