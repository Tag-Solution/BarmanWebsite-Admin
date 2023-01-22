import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./components";
import { NavigationProvider } from "./context/NavigationContext";
import { HomepageProvider } from "./context/HomeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<NavigationProvider>
		<HomepageProvider>
			<App />
		</HomepageProvider>
	</NavigationProvider>
);
