import React from "react";
import styled from "styled-components";

import { useHomepageContext } from "../context/HomeContext";

const Home = () => {
	const { homepage, homepage_loading, homepage_error } = useHomepageContext();
	console.log("====================================");
	console.log(homepage);
	console.log("====================================");

	if (homepage_error) {
		return (
			<>
				<h2>Error</h2>
			</>
		);
	}
	/* 
	const {
		id: homepageId,
		title,
		subtitle,
		date,
		direction,
		buttonResponse,
		imageResponses,
	} = homepage;
 */
	return (
		<>
			{homepage_loading ? (
				<h2>Loading....</h2>
			) : (
				<Wrapper className="section">
					<div className="section-center">
						<div className="section-title">
							<h2>Homepage</h2>
							<span>Edit Homepage Information</span>
						</div>
						<div className="main-form-container">
							<form className="main-form">
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="title">Title</label>
									<input
										type="text"
										name="title"
										id="title"
										placeholder="Title"
									/>
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="title">Subtitle</label>
									<input
										type="text"
										name="subtitle"
										id="subtitle"
										placeholder="Subtitle"
									/>
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="date">Date</label>
									<input type="text" name="date" id="date" placeholder="Date" />
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="direction">Direction</label>
									<input
										type="text"
										name="direction"
										id="direction"
										placeholder="Direction"
									/>
								</div>
								{/* Submit Form */}
								<div className="form-btn-container">
									<button type="submit" className="main-btn">
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</Wrapper>
			)}
		</>
	);
};

const Wrapper = styled.main``;

export default Home;
