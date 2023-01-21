import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SharedLayout } from "../../components";
import { Home, Images } from "../../pages";

function App() {
	return (
		<BrowserRouter basename="/BarmanWebsite-Admin">
			<Routes>
				<Route path="/" element={<SharedLayout></SharedLayout>}>
					<Route index element={<Home></Home>}></Route>
					<Route path="images" element={<Images></Images>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
