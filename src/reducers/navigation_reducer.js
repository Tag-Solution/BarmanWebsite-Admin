import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GENERIC_MODAL_OPEN,
	GENERIC_MODAL_CLOSE,
} from "../actions";

const navigation_reducer = (state, action) => {
	if (action.type === SIDEBAR_OPEN) {
		return { ...state, isSidebarOpen: true };
	}
	if (action.type === SIDEBAR_CLOSE) {
		return { ...state, isSidebarOpen: false };
	}
	if (action.type === GENERIC_MODAL_OPEN) {
		return { ...state, isGenericModalOpen: true };
	}
	if (action.type === GENERIC_MODAL_CLOSE) {
		return { ...state, isGenericModalOpen: false };
	}
	return state;
};

export default navigation_reducer;
