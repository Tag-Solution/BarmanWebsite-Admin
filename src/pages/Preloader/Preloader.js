import React from "react";
import styled from "styled-components";

const Preloader = () => {
	return (
		<Wrapper>
			<div>
				<h2>T.A.G</h2>
				<h3>Solution</h3>
				<span>Loading...</span>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	width: 100%;
	height: 70vh;
	display: grid;
	place-items: center;
	div {
		font-family: var(--FontTitles);
		color: var(--ColorCrimson);
		font-weight: 500;
		letter-spacing: 0.3rem;
		text-align: center;
		h2 {
			font-size: 7rem;
			font-weight: 200;
		}
		h3 {
			font-size: 3rem;
			font-weight: 200;
			margin-bottom: 2rem;
		}
		span {
			font-family: var(--FontTexts);
			color: var(--ColorBlack-5);
			font-size: 1.5rem;
			font-weight: 300;
		}
	}
`;

export default Preloader;
