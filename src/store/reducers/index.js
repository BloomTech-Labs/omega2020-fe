export const initialState = {
  // User Authentication State
  // Grid Vaidation State
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET4x4GRID':
      return {
        ...state,
        get4x4: {
          ...state,
          // state changes
        },
      };
    case 'GET6x6GRID':
      return {
        ...state,
        get6x6: {
          ...state,
          /// state changes
        },
      };
    case 'GET9x9GRID':
      return {
        ...state,
        get9x9: {
          ...state,
          //state changes
        },
      };
    default:
      return state;
  }
};
