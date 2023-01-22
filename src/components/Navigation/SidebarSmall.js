import React from "react";

import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import NavLinks from "./NavLinks";

import { useNavigationContext } from "../../context/NavigationContext";

const SidebarSmall = () => {
	const { isSidebarOpen, closeSidebar } = useNavigationContext();
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<button className="close-btn">
						<FaTimes onClick={closeSidebar} />
					</button>
					<header>
						<h2>Menu</h2>
					</header>
					<NavLinks></NavLinks>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.aside`
	@media (min-width: 992px) {
		display: none;
	}
	.sidebar-container {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: -1;
		opacity: 0;
		transition: var(--MainTransition);
	}
	.show-sidebar {
		z-index: 99;
		opacity: 1;
	}
	.content {
		background: var(--ColorWhite);
		width: 90vw;
		height: 95vh;
		border-radius: 0.25rem;
		padding: 4rem 2rem;
		position: relative;
		display: flex;
		align-items: center;
		flex-direction: column;
		.close-btn {
			position: absolute;
			top: 10px;
			left: 10px;
			background: transparent;
			border-color: transparent;
			font-size: 2rem;
			color: var(--ColorCrimson);
			cursor: pointer;
		}
		header {
			h2 {
				font-size: 2rem;
				letter-spacing: 0.4rem;
				font-weight: 600;
				color: var(--FontColorDark);
				font-family: var(--FontTitles);
			}
		}
	}
	// NavLinks
	.nav-links {
		padding-top: 2rem;
		display: flex;
		flex-direction: column;
		.nav-link {
			display: flex;
			align-items: center;
			font-size: 1.2rem;
			font-weight: 300;
			letter-spacing: 0.1rem;
			color: var(--FontColorGrey);
			font-family: var(--FontTexts);
			padding: 1rem 0;
			transition: var(--TransitionFast);
		}
		.nav-link:hover {
			color: var(--ColorCrimson);
		}
		.active {
			color: var(--ColorCrimson);
		}
	}
`;

export default SidebarSmall;
