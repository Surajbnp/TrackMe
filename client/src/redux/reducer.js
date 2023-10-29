import * as types from "./actionTypes";

let initialState = {
  todos: [],
  isLoading: false,
  isErr: false,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        isLoading: true,
        isErr: false,
      };

    case types.GET_DATA_SUCCESS:
      return {
        todos: payload,
        isLoading: false,
        isErr: false,
      };

    case types.GET_DATA_FAILURE:
      return {
        isLoading: false,
        isErr: true,
      };

    case types.ADD_TASK_REQUEST:
      return {
        isLoading: true,
        isErr: false,
      };

    case types.ADD_TASK_SUCCESS:
      return {
        isLoading: false,
        isErr: false,
      };

    case types.ADD_TASK_FAILURE:
      return {
        isLoading: true,
        isErr: true,
      };

      case types.DELETE_TASK_REQUEST:
        return {
          isLoading: true,
          isErr: false,
        };
  
      case types.DELETE_TASK_SUCCESS:
        return {
          isLoading: false,
          isErr: false,
        };
  
      case types.DELETE_TASK_FAILURE:
        return {
          isLoading: false,
          isErr: true,
        };

        case types.UPDATE_TASK_REQUEST:
          return {
            isLoading: true,
            isErr: false,
          };
    
        case types.UPDATE_TASK_SUCCESS:
          return {
            isLoading: false,
            isErr: false,
          };
    
        case types.UPDATE_TASK_FAILURE:
          return {
            isLoading: false,
            isErr: true,
          };

    default: {
      return state;
    }
  }
};

export default reducer;
