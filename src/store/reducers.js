import { actions } from "./actions";

const {
  PAGE_LOADING,
  JOKES_LOADING,
  SEARCH_JOKES,
  JOKES_SEARCH_ERROR,
  JOKES_SEARCH_SUCCESS,
} = actions;

// Reducers
const REDUCERS = {
  [PAGE_LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),

  [JOKES_LOADING]: (state, action) => ({
    ...state,
    isSearching: action.payload,
  }),

  [SEARCH_JOKES]: (state, action) => ({
    ...state,
    jokes: [],
    hasError: false,
    query: action.payload,
  }),

  [JOKES_SEARCH_SUCCESS]: (state, action) => ({
    ...state,
    jokes: action.payload,
    hasError: false,
    isSearching: false,
  }),

  [JOKES_SEARCH_ERROR]: (state, action) => ({
    ...state,
    hasError: true,
    isSearching: false,
  }),
};

export const initialState = {
  jokes: [],
  isLoading: false,
  isSearching: false,
  error: false,
  searchError: null,
  query: "",
};

const reducer = (state = initialState, action) => {
  const handler = REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};

export default reducer;
