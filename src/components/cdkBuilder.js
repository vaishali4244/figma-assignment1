import '../assets/styles/cdkBuilder.scss';


const CdkBuilder = ({ imgName, title, intro, image, highlights, rating, ratingLevel, stars }) => {


    return (
        <div className="builder-container">
            <div className="img">
                <img src={require("../assets/images/download 1.png")} alt="" />
                <p>{imgName}</p>
            </div>
            <div className="builder-content">
                <p>{title}
                    <span>{intro}</span>
                </p>
                <p>26% Off</p>
                <h5>Main highlights</h5>
                <div className="highlight-content">
                    <p><span>9.9</span>building responsive</p>
                    <p><span>8.9</span>Cool</p>
                    <p><span>8.9</span>Docs</p>
                </div>
                <p>Why we love it</p>
                <div className="p-content">
                    <img src={require("../assets/images/IMAGEtick.png")} alt="" />
                    <p>Documentation</p>
                </div>
                <div className="p-content">
                    <img src={require("../assets/images/IMAGEtick.png")} alt="" />
                    <p>Easy Use</p>
                </div>
                <div className="p-content">
                    <img src={require("../assets/images/IMAGEtick.png")} alt="" />
                    <p>Out of box</p>
                </div>
                <p>Show more {image} </p>
            </div>
            <div className="rating-content">
                <div className="rating-count">
                    <img src={require("../assets/images/IMAGE (5).png")} alt="" />
                    <p>{rating}</p>
                    <p>{ratingLevel}</p>
                    <img src={stars} alt="" />
                </div>
                <button className="view">View </button>
            </div>
        </div>
    )
}

export default CdkBuilder;