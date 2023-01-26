import {
	GET_HOMEPAGE,
	GET_HOMEPAGE_SUCCESS,
	GET_HOMEPAGE_ERROR,
} from "../actions";

const homepage_reducer = (state, action) => {
	// GET:
	if (action.type === GET_HOMEPAGE) {
		return { ...state, homepage_loading: true };
	}
	if (action.type === GET_HOMEPAGE_SUCCESS) {
		return { ...state, homepage_loading: false, homepage: action.payload };
	}
	if (action.type === GET_HOMEPAGE_ERROR) {
		return { ...state, homepage_loading: false, homepage_error: true };
	}

	throw new Error(`No Matching "${action.type}" - action type`);
};

export default homepage_reducer;
