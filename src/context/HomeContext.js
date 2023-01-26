import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../reducers/homepage_reducer";
import {
	GET_HOMEPAGE,
	GET_HOMEPAGE_SUCCESS,
	GET_HOMEPAGE_ERROR,
} from "../actions";

import { API_HOME_GET } from "../utils/api_constants";

const initialState = {
	homepage_loading: false,
	homepage_error: false,
	homepage: {},
};

const HomepageContext = React.createContext();

export const HomepageProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// GET Homepage:
	const getHomepage = async () => {
		dispatch({ type: GET_HOMEPAGE });
		try {
			const response = await axios.get(API_HOME_GET);
			const homepage = response.data;
			dispatch({ type: GET_HOMEPAGE_SUCCESS, payload: homepage });
		} catch (error) {
			dispatch({ type: GET_HOMEPAGE_ERROR });
		}
	};

	useEffect(() => {
		getHomepage();
	}, []);

	return (
		<HomepageContext.Provider value={{ ...state }}>
			{children}
		</HomepageContext.Provider>
	);
};

export const useHomepageContext = () => {
	return useContext(HomepageContext);
};
