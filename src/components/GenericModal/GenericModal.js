import React from "react";
import styled from "styled-components";

const GenericModal = () => {
	return (
		<Wrapper>
			<div className="modal-container">
				<div className="section-center">
					<div className="modal-info-container">
						<h2>Generic Modal</h2>
						<p>Lorem ipsum dolor sit amet consectetur.</p>
						<div className="btn-container">
							<span>Accept</span>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	width: 100vw;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	background: var(--ColorBlack-7);
	transition: var(--MainTransition);
	.modal-container {
		width: 80%;
		height: 8rem;
		max-width: 25rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--ColorWhite);
		display: flex;
		align-items: center;
		.modal-info-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 6.5rem;
			text-align: center;
			h2 {
				font-family: var(--FontTitles);
				font-size: 1rem;
				font-weight: 700;
				letter-spacing: 0.1rem;
				color: var(--FontColorGrey);
			}
			p {
				font-family: var(--FontTexts);
				font-size: 0.85rem;
				font-weight: 500;
				color: var(--FontColorDark);
				margin-top: -0.7rem;
			}
			.btn-container {
				margin: 0 auto;
				padding: 0.3rem 0.4rem;
				color: var(--ColorCrimson);
				font-size: 1rem;
				font-weight: 700;
				letter-spacing: 0.2rem;
				font-family: var(--FontTitles);
				text-transform: uppercase;
				border: 1px solid var(--ColorCrimson);
				cursor: pointer;
				transition: var(--MainTransition);
			}
			.btn-container:hover {
				color: var(--ColorWhite);
				background: var(--ColorCrimson);
				border: 1px solid var(--ColorCrimson);
			}
		}
	}
`;

export default GenericModal;
