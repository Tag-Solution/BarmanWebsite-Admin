import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";

const Sidebar = () => {
	return (
		<Wrapper>
			<div className="sidebar-container show-sidebar">
				<div className="content">
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
	display: none;
	@media (min-width: 992px) {
		display: block;
		box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
		.sidebar-container {
			background: var(--ColorWhiteDark);
			min-height: 100vh;
			height: 100%;
			width: 250px;
			margin-left: -250px;
			transition: var(--MainTransition);
		}
		.show-sidebar {
			margin-left: 0;
		}
		.content {
			position: sticky;
			top: 0;
			header {
				height: 6rem;
				display: flex;
				align-items: center;
				padding-left: 2.5rem;
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
		}
		.nav-link {
			display: flex;
			align-items: center;
			padding: 1rem 0;
			padding-left: 2.5rem;
			text-transform: capitalize;
			font-size: 1.2rem;
			font-weight: 300;
			color: var(--FontColorGrey);
			transition: var(--TransitionFast);
		}
		.nav-link:hover {
			background: white;
			padding-left: 3rem;
			color: var(--ColorCrimson);
		}
		.active {
			color: var(--ColorCrimson);
		}
	}
`;

export default Sidebar;
