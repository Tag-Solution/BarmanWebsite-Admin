import React from "react";
import { NavLink } from "react-router-dom";

import { links } from "../../utils/routes";

import { useNavigationContext } from "../../context/NavigationContext";

const NavLinks = () => {
	const { closeSidebar } = useNavigationContext();

	return (
		<div className="nav-links">
			{links.map((link) => {
				const { text, path, id } = link;
				return (
					<NavLink
						to={path}
						className={({ isActive }) => {
							return isActive ? "nav-link active" : "nav-link";
						}}
						key={id}
						onClick={closeSidebar}
						end
					>
						{text}
					</NavLink>
				);
			})}
		</div>
	);
};

export default NavLinks;
