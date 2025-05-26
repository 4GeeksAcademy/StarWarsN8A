import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div class="stars"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
<div class="shooting-star"></div>
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/560px-Star_Wars_Logo.svg.png" style={{width:"100px"}} /></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn">Favorites 0</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};