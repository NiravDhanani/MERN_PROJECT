

const initialState = {
    register: [],
    Loginuser : [],
  };
  
  export const SocialReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          register: [...state.register, action.payload], 
        };
        case "":
          return {
            ...state,
            Loginuser : [...state.Loginuser,action.payload]
          }
      default:
        return state;
    }
  };
   