import { SET_ADDRESS, FETCH_SEARCH_DATA, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE } from './action_types';

export const setAddress = (address) => async (dispatch) => {
  dispatch({
    type: SET_ADDRESS,
    payload: address
  })
}


// EXAMPLE
export const fetchSearchData = (args) => async (dispatch) => {
   dispatch({ type: FETCH_SEARCH_DATA });
   try {
     const result = await fetchSearchData(args.pageCount, args.itemsPerPage);
     dispatch({ type: FETCH_SEARCH_SUCCESS, payload: result, currentPage: args.pageCount });
   } catch (err) {
     dispatch({ type: FETCH_SEARCH_FAILURE,  error: err });
   }
}
