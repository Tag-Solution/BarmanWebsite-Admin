import React from "react";

import styled from "styled-components";

const Landing = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<div className="section-title">
					<h2>T.A.G.</h2>
					<span>Solution</span>
				</div>
				<article className="about-container max-width-container-900">
					<h3>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo
						commodi perspiciatis animi voluptates, similique expedita porro
						error quaerat ex dolorum temporibus recusandae eaque impedit a?
						Quidem itaque praesentium illum et, quae facilis eveniet asperiores
						nihil quas inventore repellendus deserunt!
					</h3>
				</article>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	text-align: center;
	.about-container {
		display: grid;
		place-items: center;
		height: 30vh;
		color: var(--ColorBlack-7);
		font-size: 1rem;
		letter-spacing: 0.1rem;
		font-weight: 200;
		line-height: 1.85rem;
	}
`;

export default Landing;
