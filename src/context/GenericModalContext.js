import React, { useContext, useReducer } from "react";

import { GENERIC_MODAL_OPEN, GENERIC_MODAL_CLOSE } from "../actions";
import reducer from "../reducers/generic_modal_reducer";

const initialState = {
	isGenericModalOpen: false,
	typeOfModal: "",
};

const GenericModalContext = React.createContext();

export const GenericModalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openGenericModal = (isModalError) => {
		dispatch({ type: GENERIC_MODAL_OPEN, payload: isModalError });
	};
	const closeGenericModal = () => {
		dispatch({ type: GENERIC_MODAL_CLOSE });
	};

	return (
		<GenericModalContext.Provider
			value={{
				...state,
				openGenericModal,
				closeGenericModal,
			}}
		>
			{children}
		</GenericModalContext.Provider>
	);
};
export const useGenericModalContext = () => {
	return useContext(GenericModalContext);
};
