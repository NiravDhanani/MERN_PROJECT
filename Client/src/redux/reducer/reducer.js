const initialState = {
  register: [],
  Loginuser: [],
  Category: [],
  single: {},
  Product : [],
};

export const FreshMart = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state, 
        register: action.payload,
      };

    case "VIEW_CATEGORY":
      return {
        ...state,
        Category: action.payload,
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        Category: state.Category.filter(
          (category) => category._id !== action.payload
        ),
      };
    case "EDIT_CATEGORY": {
      return {
        ...state,
        single: action.payload,
      };
    }
    case "UPDATE_CATEGORY": {
      return {
        ...state,
        Category: state.Category.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    }

    case "PRODUCT_VIEW" : {
      return {
        ...state,
        Product : action.payload
      }
    }
    default:
      return state;
  }
};
