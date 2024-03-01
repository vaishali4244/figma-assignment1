


const Builder = ({ imgName, title, intro, image, highlights, rating, ratingLevel, stars }) => {


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
                <h5>Main highlights</h5>
                <p>[What You Get]:{highlights}</p>
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

export default Builder;