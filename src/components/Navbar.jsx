import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const Navbar = () => {

	const {store, dispatch} = useGlobalReducer();

	const handleRemove = (item) => {
		dispatch({ type: "remove_favorite", payload: item });
		
	};

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
						<button 
						className="btn dropdown-toggle" 
						type="button" 
						data-bs-toggle="dropdown" 
						aria-expanded="false"> Favorites <span className="badge">{store.favorites.length}</span>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};