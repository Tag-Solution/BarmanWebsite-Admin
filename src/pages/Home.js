import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { useHomepageContext } from "../context/HomeContext";
import { API_HOME_POST } from "../utils/api_constants";

const Home = () => {
	const [fileName, setFileName] = useState(null);
	const [data, setData] = useState({
		home: {
			date: "",
			title: "",
			subtitle: "",
			direction: "",
			buttonRequest: {
				url: "",
				title: "",
			},
		},
		postImages: {},
	});
	const { homepage, homepage_loading, homepage_error } = useHomepageContext();

	// FileInput:
	const handleFileName = (e) => {
		const image = document.getElementById("image").files[0];
		if (image.name) {
			setFileName(image.name);
		}
	};
	// Handle Data:
	const handleData = (e) => {
		const newData = { ...data };
		newData.home[e.target.id] = e.target.value;
		newData.postImages = document.getElementById("image").files[0];
		setData(newData);
	};
	const handleBtnRequest = (e) => {
		const newData = { ...data };
		newData.home.buttonRequest[e.target.id] = e.target.value;
		console.log("====================================");
		console.log(newData);
		console.log("====================================");
		setData(newData);
	};

	/*
	 * onSubmit
	 */
	const handleSubmit = (e) => {
		e.preventDefault();
		var homepageForm = new FormData();
		homepageForm.append(
			"home",
			new Blob([JSON.stringify(data.home)], { type: "application/json" })
		);
		if (data.postImages === undefined) {
			homepageForm.append(
				"postImages",
				new Blob([data.postImages], { type: "form-data" })
			);
		} else {
			homepageForm.append("postImages", data.postImages);
		}
		// new Response(userFormData).text().then(console.log); // To see the entire raw body
		return axios
			.post(API_HOME_POST, homepageForm, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				console.log("====================================");
				console.log(response.data);
				console.log("====================================");
			});
	};

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
							<form className="main-form" id="homeForm" onSubmit={handleSubmit}>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="title">Title</label>
									<input
										type="text"
										name="title"
										id="title"
										placeholder="Title"
										onChange={(e) => {
											handleData(e);
										}}
									/>
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="subtitle">Subtitle</label>
									<input
										type="text"
										name="subtitle"
										id="subtitle"
										placeholder="Subtitle"
										onChange={(e) => {
											handleData(e);
										}}
									/>
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="date">Date</label>
									<input
										type="text"
										name="date"
										id="date"
										placeholder="Date"
										onChange={(e) => {
											handleData(e);
										}}
									/>
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="direction">Direction</label>
									<input
										type="text"
										name="direction"
										id="direction"
										placeholder="Direction"
										onChange={(e) => {
											handleData(e);
										}}
									/>
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="buttonUrl">Button URL</label>
									<input
										type="text"
										name="buttonUrl"
										id="url"
										placeholder="Button URL"
										onChange={(e) => {
											handleBtnRequest(e);
										}}
									/>
								</div>
								{/* Single Input */}
								<div className="single-input">
									<label htmlFor="buttonTitle">Button Title</label>
									<input
										type="text"
										name="buttonTitle"
										id="title"
										placeholder="Button Title"
										onChange={(e) => {
											handleBtnRequest(e);
										}}
									/>
								</div>
								{/* Single Input */}
								<div>
									<label htmlFor="image" className="file-input">
										<input
											type="file"
											name="image"
											className="custom-file-input"
											id="image"
											onChange={(e) => {
												handleFileName(e);
												handleData(e);
											}}
										/>
										{fileName ? <span>{fileName}</span> : "Home Background"}
										<AiOutlineCloudUpload id="foto-icon"></AiOutlineCloudUpload>
									</label>
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
