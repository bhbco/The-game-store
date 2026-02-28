import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <h3 className='text-light text-center mt-3 fw-light' >Featured Games</h3>
            <Carousel id="carouselExampleAutoplaying" interval={3000} pause="hover" className=" mx-auto mt-3" style={{ borderRadius: "10px", width: "70%" }}>
                <Carousel.Item>
                    <Link
                        to="/game/rdr2"
                        state={{
                            game: {
                                title: "Red dead redemption 2",
                                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961",
                                description: "An open world action-adventure game",
                                genre: "Open world action-adventure",
                                publisher: "Rockstar Games",
                                releaseDate: "2018",
                                developer: "Rockstar North",
                                price: "$19.99",
                                crackedLink: "https://steamunlocked.net/red-dead-redemption-2-free-pc-download/",
                                reviews: [
                                    { user: "Arthur Morgan", rating: 5, comment: "Best game ever." },
                                    { user: "John Marston", rating: 4.5, comment: "Needs more faith." }
                                ]
                            }
                        }}
                        style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                        <img
                            className="d-block w-100"
                            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Red dead redemption 2</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <Link
                        to="/game/helldivers2"
                        state={{
                            game: {
                                title: "Helldivers 2",
                                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/ss_0c79f56fc7be1bd0102f2ca1c92c8f0900daf4fb.1920x1080.jpg?t=1766051960",
                                description: "A shooter game about going to different planets and defeating the aliens",
                                genre: "Third-person shooter",
                                publisher: "Sony Interactive Entertainment",
                                releaseDate: "2024",
                                developer: "Arrowhead Game Studios",
                                price: "$39.99",
                                crackedLink: "https://steamunlocked.net/helldivers-2-free-download/",
                                reviews: [
                                    { user: "Space Marine", rating: 5, comment: "For Democracy!" },
                                    { user: "Bug Stomper", rating: 4, comment: "Too many bugs, literally." }
                                ]
                            }
                        }}
                        style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                        <img
                            className="d-block w-100"
                            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/ss_0c79f56fc7be1bd0102f2ca1c92c8f0900daf4fb.1920x1080.jpg?t=1766051960"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Helldivers 2</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>

                <Carousel.Item>
                    <Link
                        to="/game/eldenring"
                        state={{
                            game: {
                                title: "Elden ring",
                                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1748630546",
                                description: "A souls game about surviving the lands between and becoming the elden lord",
                                genre: "Action RPG",
                                publisher: "Bandai Namco Entertainment",
                                releaseDate: "2022",
                                developer: "FromSoftware",
                                price: "$59.99",
                                crackedLink: "https://steamunlocked.net/elden-ring-free-download/",
                                reviews: [
                                    { user: "Tarnished", rating: 5, comment: "You died." },
                                    { user: "Melina", rating: 4.5, comment: "Offer an accord?" }
                                ]
                            }
                        }}
                        style={{ cursor: "pointer", textDecoration: "none" }}
                    >
                        <img
                            className="d-block w-100"
                            src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1748630546"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Elden Ring</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            </Carousel>
            {/* creating a genre section using grid */}
            <div className="container text-center pb-5">
                <h2 className="text-center my-5 text-light">Featured Section</h2>
                <div className="row g-4">
                    {/* card 1 */}
                    <div className="col-12 col-lg-3 col-md-6" >
                        <div className="card h-100">
                            <img
                                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961"
                                className="card-img-top"
                                alt="Creative workspace"
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge badge-gradient rounded-pill px-3 py-2">Design</span>
                                    <small className="text-secondary">Updated 2d ago</small>
                                </div>
                                <h5 className="card-title text-light">Red dead redemption 2</h5>
                                <p className="card-text text-secondary">
                                    An open world action-adventure game
                                </p>
                                <Link
                                    to="/game/rdr2"
                                    state={{
                                        game: {
                                            title: "Red dead redemption 2",
                                            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1174180/ss_66b553f4c209476d3e4ce25fa4714002cc914c4f.1920x1080.jpg?t=1759502961",
                                            description: "An open world action-adventure game",
                                            genre: "Open world action-adventure",
                                            publisher: "Rockstar Games",
                                            releaseDate: "2018",
                                            developer: "Rockstar North",
                                            price: "$19.99",
                                            crackedLink: "https://steamunlocked.net/red-dead-redemption-2-free-pc-download/",
                                            reviews: [
                                                { user: "Arthur Morgan", rating: 5, comment: "Best game ever." },
                                                { user: "John Marston", rating: 4.5, comment: "Needs more faith." }
                                            ]
                                        }
                                    }}
                                    className="btn btn-warning w-100"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* card2 */}
                    <div className="col-12 col-lg-3 col-md-6" >
                        <div className="card h-100">
                            <img
                                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/ss_0c79f56fc7be1bd0102f2ca1c92c8f0900daf4fb.1920x1080.jpg?t=1766051960"
                                className="card-img-top"
                                alt="Creative workspace"
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge badge-gradient rounded-pill px-3 py-2">Design</span>
                                    <small className="text-secondary">Updated 2d ago</small>
                                </div>
                                <h5 className="card-title text-light">Helldivers 2</h5>
                                <p className="card-text text-secondary">
                                    A shooter game about going to different planets and defeating the aliens
                                </p>
                                <Link
                                    to="/game/helldivers2"
                                    state={{
                                        game: {
                                            title: "Helldivers 2",
                                            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/553850/ss_0c79f56fc7be1bd0102f2ca1c92c8f0900daf4fb.1920x1080.jpg?t=1766051960",
                                            description: "A shooter game about going to different planets and defeating the aliens",
                                            genre: "Third-person shooter",
                                            publisher: "Sony Interactive Entertainment",
                                            releaseDate: "2024",
                                            developer: "Arrowhead Game Studios",
                                            price: "$39.99",
                                            crackedLink: "https://steamunlocked.net/helldivers-2-free-download/",
                                            reviews: [
                                                { user: "Space Marine", rating: 5, comment: "For Democracy!" },
                                                { user: "Bug Stomper", rating: 4, comment: "Too many bugs, literally." }
                                            ]
                                        }
                                    }}
                                    className="btn btn-warning w-100"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6" >
                        <div className="card h-100">
                            <img
                                src="https://imgix.bustle.com/uploads/image/2022/10/4/0d085b1b-eda8-41ad-a3c4-811f65adc665-dsr2.jpg?w=2000&h=1090&fit=crop&crop=faces&auto=format%2Ccompress"
                                className="card-img-top"
                                alt="Creative workspace"
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge badge-gradient rounded-pill px-3 py-2">Design</span>
                                    <small className="text-secondary">Updated 2d ago</small>
                                </div>
                                <h5 className="card-title text-light">Dead space</h5>
                                <p className="card-text text-secondary">
                                    A horror game about being trapped in USS Ishimura full of zombies
                                </p>
                                <Link
                                    to="/game/deadspace"
                                    state={{
                                        game: {
                                            title: "Dead space",
                                            image: "https://imgix.bustle.com/uploads/image/2022/10/4/0d085b1b-eda8-41ad-a3c4-811f65adc665-dsr2.jpg?w=2000&h=1090&fit=crop&crop=faces&auto=format%2Ccompress",
                                            description: "A horror game about being trapped in USS Ishimura full of zombies",
                                            genre: "Survival Horror",
                                            publisher: "Electronic Arts",
                                            releaseDate: "2023",
                                            developer: "Motive Studio",
                                            price: "$59.99",
                                            crackedLink: "https://steamunlocked.net/dead-space-remake-free-download/",
                                            reviews: [
                                                { user: "Isaac Clarke", rating: 5, comment: "Scary as hell." },
                                                { user: "Necromorph", rating: 1, comment: "Needs more limbs to cut off." }
                                            ]
                                        }
                                    }}
                                    className="btn btn-warning w-100"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-6" >
                        <div className="card h-100">
                            <img
                                src='https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1748630546'
                                className="card-img-top"
                                alt="Creative workspace"
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge badge-gradient rounded-pill px-3 py-2">Design</span>
                                    <small className="text-secondary">Updated 2d ago</small>
                                </div>
                                <h5 className="card-title text-light">Elden ring</h5>
                                <p className="card-text text-secondary">
                                    A souls game about surviving the lands between and becoming the elden lord
                                </p>
                                <Link
                                    to="/game/eldenring"
                                    state={{
                                        game: {
                                            title: "Elden ring",
                                            image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/ss_3c41384a24d86dddd58a8f61db77f9dc0bfda8b5.1920x1080.jpg?t=1748630546",
                                            description: "A souls game about surviving the lands between and becoming the elden lord",
                                            genre: "Action RPG",
                                            publisher: "Bandai Namco Entertainment",
                                            releaseDate: "2022",
                                            developer: "FromSoftware",
                                            price: "$59.99",
                                            crackedLink: "https://steamunlocked.net/elden-ring-free-download/",
                                            reviews: [
                                                { user: "Tarnished", rating: 5, comment: "You died." },
                                                { user: "Melina", rating: 4.5, comment: "Offer an accord?" }
                                            ]
                                        }
                                    }}
                                    className="btn btn-warning w-100"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;