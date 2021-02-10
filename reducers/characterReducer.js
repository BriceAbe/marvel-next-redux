const initialeState = { chemise: 15 };

const characterReducer = (state = initialeState, action) => {
  switch (action.type) {
    case "GET_DATA_CHARACTER":
      return { ...state, dataCharacter: action.payload };
    case "vente_chemise_one":
      const resultat = state.chemise - action.payload.forOne;
      return { ...state, chemise: resultat };
    case "vente_chemise_five":
      const resultat2 = state.chemise - action.payload.forFive;
      return { ...state, chemise: resultat2 };

    default:
      return state;
  }
};

export default characterReducer;
