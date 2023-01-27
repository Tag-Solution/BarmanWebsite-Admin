import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useGenericModalContext } from "../../context/GenericModalContext";

const GenericModal = ({ title, text, path, btnText, externalUrl }) => {
	const { isGenericModalOpen, closeGenericModal } = useGenericModalContext();

	return (
		<Wrapper
			style={isGenericModalOpen ? { display: "block" } : { display: "none" }}
		>
			<div className="modal-container">
				<div className="section-center">
					<div className="modal-info-container">
						<h2>{title}</h2>
						<p>
							{text}
							{"\n"}
							<a
								className="external-url"
								href={externalUrl}
								target="_blank"
								rel="noreferrer"
							>
								Ver Deploy!
							</a>
						</p>
						<div className="btn-container">
							<Link
								to={path}
								onClick={() => {
									closeGenericModal();
								}}
							>
								{btnText}
							</Link>
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
		height: 10rem;
		max-width: 25rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 0.65rem;
		background: var(--ColorWhite);
		display: flex;
		align-items: center;
		.modal-info-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			height: 8rem;
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
				.external-url {
					display: block;
					text-decoration: underline;
					color: inherit;
					font-weight: 600;
					letter-spacing: 0.1rem;
					cursor: pointer;
				}
				margin-bottom: 0.7rem;
			}
			.btn-container {
				margin: 0 auto;
				padding: 0.3rem 0.4rem;
				color: var(--ColorCrimson);
				font-size: 0.8rem;
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
