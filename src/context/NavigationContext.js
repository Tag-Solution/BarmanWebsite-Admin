import React, { useContext, useReducer } from "react";

import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GENERIC_MODAL_OPEN,
	GENERIC_MODAL_CLOSE,
} from "../actions";
import reducer from "../reducers/navigation_reducer";

const initialState = {
	isSidebarOpen: false,
	isGenericModalOpen: false,
};

const NavigationContext = React.createContext();

export const NavigationProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};
	const openGenericModal = () => {
		dispatch({ type: GENERIC_MODAL_OPEN });
	};
	const closeGenericModal = () => {
		dispatch({ type: GENERIC_MODAL_CLOSE });
	};

	return (
		<NavigationContext.Provider
			value={{
				...state,
				openSidebar,
				closeSidebar,
				openGenericModal,
				closeGenericModal,
			}}
		>
			{children}
		</NavigationContext.Provider>
	);
};
export const useNavigationContext = () => {
	return useContext(NavigationContext);
};
