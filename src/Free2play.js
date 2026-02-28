export default function Free2play() {
    // Open game in a new fullscreen tab
    const openGame = (gameName) => {
        window.open(`/emulatorjs/index.html?game=/${gameName}`, '_blank');
    };

    return (
        <div>
            {/* Featured Games Section */}
            <div className="container text-center pb-5">
                <h2 className="text-center my-5 text-light">Featured Games</h2>
                <div className="row g-4">

                    {/* Bomberman Card */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('Bomberman.nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://m.media-amazon.com/images/I/71BH4LtaUIL._AC_SL1000_.jpg"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">Bomberman</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Two Stunt SuperCars */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('Contra (USA).nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://nesninja.com/public/images/nes/found/Contra_3.png"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">Contra</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Wave Dash */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('Legend of Zelda, The (USA).nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://th.bing.com/th/id/R.46dfacfbb8ba760ecb27293e7be55b87?rik=AWjUQyBZzqux2Q&pid=ImgRaw&r=0"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">Legend of Zelda</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Elden Ring */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('Donkey Kong (World) (Rev 1).nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://tse4.mm.bing.net/th/id/OIP.6Np3b9CMZc9WTg7l5b9NYAHaF7?rs=1&pid=ImgDetMain&o=7&rm=3"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">Donkey Kong</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* grid 2 */}
            <div className="container text-center pb-5">

                <div className="row g-4">

                    {/* Bomberman Card */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('Adventure Island 3 (USA).nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://tse4.mm.bing.net/th/id/OIP.yO0as79FO4shFFrwxMeu3QHaE3?rs=1&pid=ImgDetMain&o=7&rm=3"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">Adventure Island 3</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Two Stunt SuperCars */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('RoadBlasters (USA).nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://tse4.mm.bing.net/th/id/OIP.pIYsyUTJDjkheYaSkvcQCQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">roadblasters</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Wave Dash */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('Major League Baseball (USA) (Rev 1).nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://i.ytimg.com/vi/bfpgLLKZes8/maxresdefault.jpg"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">Major League Baseball</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Elden Ring */}
                    <div className="col-12 col-lg-3 col-md-6">
                        <div
                            className="card h-100 game-card"
                            onClick={() => openGame('Super Mario Bros. 3 (USA) (Rev 1).nes')}
                            style={{ cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 107, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <img
                                src="https://tse3.mm.bing.net/th/id/OIP.hKSRrWjSFyI1Fa8No9CyKgHaGP?rs=1&pid=ImgDetMain&o=7&rm=3"
                                className="card-img-top"
                                alt="Bomberman"
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="badge bg-danger rounded-pill px-3 py-2">NES Classic</span>
                                    <small className="text-secondary">Retro</small>
                                </div>
                                <h5 className="card-title text-light">super mario bros 3</h5>
                                <p className="card-text text-secondary">
                                    The classic explosive action game. Plant bombs and blast your way through!
                                </p>
                                <button className="btn btn-outline-danger w-100">
                                    🎮 Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}