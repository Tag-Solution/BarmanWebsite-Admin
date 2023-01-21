import React from "react";
import styled from "styled-components";

const DummyPage = () => {
	return (
		<Wrapper>
			<div className="dummy-container">
				<h2>Dummy Page</h2>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	width: 100vw;
	height: 100vh;
	.dummy-container {
		width: 100%;
		height: 100%;
		background: aquamarine;
		h2 {
			height: 100%;
			display: grid;
			place-items: center;
		}
	}
`;

export default DummyPage;
