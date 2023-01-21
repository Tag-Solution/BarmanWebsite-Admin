import React from "react";
import styled from "styled-components";

import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="nav-center">
				<button
					type="button"
					className="toggle-btn"
					onClick={() => {
						console.log("====================================");
						console.log("BTN");
						console.log("====================================");
					}}
				>
					<FaAlignLeft />
				</button>
				<div>
					<h2>TAG</h2>
					<h3 className="logo-text">Solution</h3>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	height: 4rem;
	background: var(--ColorWhiteDark);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
	.nav-center {
		display: flex;
		width: 90vw;
		align-items: center;
		justify-content: space-between;
		.toggle-btn {
			background: transparent;
			border-color: transparent;
			font-size: 1.75rem;
			color: var(--ColorCrimson);
			cursor: pointer;
			display: flex;
			align-items: center;
		}
		h2 {
			text-align: center;
			font-size: 1.7rem;
			font-weight: 300;
			font-family: var(--FontTitles);
			letter-spacing: 0.35rem;
			color: var(--ColorCrimson);
		}
		.logo-text {
			display: none;
			margin: 0;
			font-size: 1rem;
			font-weight: 300;
			font-family: var(--FontTexts);
			letter-spacing: 0.07rem;
			color: var(--ColorCrimson);
		}
	}

	@media (min-width: 992px) {
		position: sticky;
		top: 0;
		.nav-center {
			width: 90%;
			h2 {
				font-size: 1.3rem;
			}
			.logo-text {
				display: block;
			}
		}
	}
`;

export default Navbar;
