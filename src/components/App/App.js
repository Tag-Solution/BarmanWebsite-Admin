import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SharedLayout } from "../../components";
import { GenericModalProvider } from "../../context/GenericModalContext";
import { LandingPage, Home, Images } from "../../pages";

function App() {
	return (
		<BrowserRouter basename="/BarmanWebsite-Admin">
			<Routes>
				<Route path="/" element={<SharedLayout></SharedLayout>}>
					<Route index element={<LandingPage></LandingPage>}></Route>
					<Route
						path="home"
						element={
							<GenericModalProvider>
								<Home></Home>
							</GenericModalProvider>
						}
					></Route>
					<Route path="images" element={<Images></Images>}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
