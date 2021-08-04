import React from "react";

const Portfolio = ({ data }) => {
	if (data) {
		var projects = data.projects.map(function (projects) {
			var projectImage = "images/portfolio/" + projects.image;
			return (
				<div key={projects.title} className="columns portfolio-item">
					<div className="item-wrap">
						<a
							href={projects.url}
							title={projects.title}
							target="_blank"
							rel="noreferrer"
						>
							<img
								alt={projects.title}
								src={projectImage}
								style={{ height: "auto" }}
							/>
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{projects.title}</h5>
									<p>{projects.description}</p>
									<br />
									<p>{projects.category}</p>
								</div>
							</div>
							<div className="link-icon">
								<i className="fa fa-link"></i>
							</div>
						</a>
					</div>
				</div>
			);
		});
	}

	return (
		<section id="portfolio">
			<div className="row" style={{}}>
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Projects.</h1>

					<div id="portfolio-wrapper" className="portfolio_project">
						{projects}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
