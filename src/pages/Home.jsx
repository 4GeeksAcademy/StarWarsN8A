import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Single } from "./Single.jsx";
import { getElementList, getElement } from "../Services/api.js";
import LearnMore from "./LearnMore.jsx";
import { Link } from "react-router-dom";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const handleGetElementList = async (type, action) => {
		const list = await getElementList(type)
		dispatch({ type: action, payload: list })
	}
	

	useEffect(() => {

		// const handleGetPeople = async () => {
		// 	const peopleList = await getElementList("people")
		// 	dispatch({ type: "get_people", payload: peopleList })
		// }

		// handleGetPeople()
		handleGetElementList("people", "get_people")
		handleGetElementList("planets", "get_planets")
		handleGetElementList("vehicles", "get_vehicles")

	}, [])
	return (
		<>
			<div className="forBg">
			<div className="stars"></div>
			<div className="shooting-star"></div>
			<div className="shooting-star"></div>
			<div className="shooting-star"></div>
			<div className="shooting-star"></div>
			<div className="shooting-star"></div>
			</div>
			<div className="text-center mt-5">
				<div className="cardList">
					<h3>People</h3>
					<div>
						<div>
			
						<ul className="d-flex">
							{
								store.people.map((people) => (
									<li key={people.uid}>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">{people.name}</h5>
												<Link to="/learn-more/:type/:id" className="btn learn">Learn more</Link><a href="#" className="btn heart" onClick={()=>{console.log(people.name,"people")}}>💛</a>
											</div>
										</div>
									</li>
								))
							}
						</ul>
						
							{/* <div className="carousel-inner">
							<div idclassName="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
							</div>
							<div className="carousel-item">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
										<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
									</div>
								</div>
								<div className="carousel-item">
									<div className="card" style={{ width: "18rem" }}>
										<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
										<div className="card-body">
											<h5 className="card-title">Card title</h5>
											<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
											<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
										</div>
									</div>
									<div className="carousel-item">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
									</div>
									</div>
									<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="sr-only">Previous</span>
									</a>
									<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="sr-only">Next</span>
									</a>
								</div>
								</div> */}
								
								<div className="cardList">
									<h3>Planets</h3>
									
									<ul className="d-flex">
										{
											store.planets.map((planets) => (
												<li key={planets.uid}>
													<div className="card" style={{ width: "18rem" }}>
														<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
														<div className="card-body">
															<h5 className="card-title">{planets.name}</h5>
															<Link to="/learn-more/:type/:id" className="btn learn">Learn more</Link><a href="#" className="btn heart">💛</a>
														</div>
													</div>
												</li>
											))
										}
									</ul>
					

								</div>
								<div className="cardList">
									<h3>Vehicles</h3>
									<ul className="d-flex">
										{
											store.vehicles.map((vehicles) => (
												<li key={vehicles.uid}>
													<div className="card" style={{ width: "18rem" }}>
														<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
														<div className="card-body">
															<h5 className="card-title">{vehicles.name}</h5>
															<Link to="/learn-more/:type/:id" className="btn learn">Learn more</Link><a href="#" className="btn heart">💛</a>
														</div>
													</div>
												</li>
											))
										}
									</ul>


								</div>
							</div>
						</div>
					</div>
				
				</div>
	</>

			);
}; 