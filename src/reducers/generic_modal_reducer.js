import { GENERIC_MODAL_OPEN, GENERIC_MODAL_CLOSE } from "../actions";

const generic_modal_reducer = (state, action) => {
	if (action.type === GENERIC_MODAL_OPEN) {
		return { ...state, typeOfModal: action.payload, isGenericModalOpen: true };
	}
	if (action.type === GENERIC_MODAL_CLOSE) {
		return { ...state, isGenericModalOpen: false };
	}
	return state;
};

export default generic_modal_reducer;
