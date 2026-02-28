import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gamepage = () => {
    const location = useLocation();
    const { game } = location.state || {};

    if (!game) {
        return (
            <div className="container text-center mt-5">
                <h2 className="text-light">Game not found</h2>
                <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={game.image}
                        alt={game.title}
                        className="img-fluid rounded shadow-lg"
                        style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
                    />
                </div>
                <div className="col-md-6 text-light">
                    <h1 className="display-4 fw-bold">{game.title}</h1>
                    <div className="mb-3">
                        <span className="badge bg-danger me-2">{game.genre || 'Action'}</span>
                        <span className="text-secondary">Updated recently</span>
                    </div>
                    <p className="lead">{game.description}</p>
                    <div className="d-grid gap-2 d-md-block">
                        <Link
                            to="/transaction"
                            state={{ game }}
                            className="btn btn-success btn-lg me-md-2"
                        >
                            Play Now
                        </Link>
                        <button className="btn btn-outline-light btn-lg" type="button">Add to Wishlist</button>
                        {game.crackedLink && (
                            <a href={game.crackedLink} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-lg ms-md-2" style={{ fontWeight: "bold" }}>Secret Download</a>
                        )}
                    </div>

                    <div className="mt-5">
                        <h3>Game Details</h3>
                        <table className="table table-dark table-striped mt-3">
                            <tbody>
                                <tr>
                                    <th scope="row">Developer</th>
                                    <td>{game.developer}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Publisher</th>
                                    <td>{game.publisher}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Release Date</th>
                                    <td>{game.releaseDate}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>{game.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {game.reviews && game.reviews.length > 0 && (
                        <div className="mt-5 mb-5">
                            <h3>Reviews</h3>
                            <div className="list-group mt-3">
                                {game.reviews.map((review, index) => (
                                    <div key={index} className="list-group-item bg-dark text-light border-secondary">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{review.user}</h5>
                                            <small className="text-warning">{"★".repeat(Math.floor(review.rating))}{review.rating % 1 !== 0 ? "½" : ""}</small>
                                        </div>
                                        <p className="mb-1">{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gamepage;