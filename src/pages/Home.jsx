import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Single } from "./Single.jsx";
import { getElementList, getElement } from "../Services/api.js";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const handleGetElementList = async (type, action) => {
		const list = await getElementList("people")
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
						<ul className="d-flex">
							{
								store.people.map((people) => (
									<li key={people.uid}>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">{people.name}</h5>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
									</li>
								))
							}
						</ul>
						<div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselPeople1" data-slide-to="0" className="active" />
								<li data-target="#carouselPeople2" data-slide-to="1" />
								<li data-target="#carouselPeople3" data-slide-to="2" />
								<li data-target="#carouselPeople4" data-slide-to="3" />
								<li data-target="#carouselPeople5" data-slide-to="4" />
								<li data-target="#carouselPeople6" data-slide-to="5" />
								<li data-target="#carouselPeople7" data-slide-to="6" />
								<li data-target="#carouselPeople8" data-slide-to="7" />
								<li data-target="#carouselPeople9" data-slide-to="8" />
								<li data-target="#carouselPeople10" data-slide-to="9" />
							</ol>
							<div className="carousel-inner"></div>
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
									<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
										<span className="carousel-control-prev-icon" aria-hidden="true"></span>
										<span className="sr-only">Previous</span>
									</a>
									<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
										<span className="carousel-control-next-icon" aria-hidden="true"></span>
										<span className="sr-only">Next</span>
									</a>
								</div>
								</div>
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
															<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
														</div>
													</div>
												</li>
											))
										}
									</ul>
									<div className="d-flex">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
									</div>
									<div className="d-flex">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
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
															<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
														</div>
													</div>
												</li>
											))
										}
									</ul>
									<div className="d-flex">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
									</div>
									<div className="d-flex">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
									</div>

									<div className="d-flex">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
									</div>
									<div className="d-flex">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
									</div>
									<div className="d-flex">
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
										<div className="card" style={{ width: "18rem" }}>
											<img src="https://dz2cdn1.dzone.com/storage/temp/13989967-400x200" className="card-img-top" alt="placehold.it" />
											<div className="card-body">
												<h5 className="card-title">Card title</h5>
												<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
												<a href="#" className="btn learn">Learn more</a><a href="#" className="btn heart">💛</a>
											</div>
										</div>
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
							</div>
						</div>
					</div>
				
				</div>
	</>

			);
}; 