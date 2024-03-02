import '../assets/styles/cdkBuilder.scss';


const CdkBuilder = ({ number, imgName, title, intro, image, rating, ratingLevel, stars }) => {


    return (
        <div className="builder-container cdk">
            <div className="img cdk-img">
                <p className='builder-number'>{number}</p>
                <img src={require("../assets/images/download 1.png")} alt="" />
                <p>{imgName}</p>
            </div>
            <div className="builder-content">
                <p>
                    <span>{title}</span>
                    {intro}
                </p>
                <p className='p-off'>26% Off</p>
                <h5>Main highlights</h5>
                <div className="highlight-content">
                    <p className='highlight-p'>
                        <span>9.9</span>
                        building responsive
                    </p>
                    <p className='highlight-p'>
                        <span>8.9</span>
                        Cool
                    </p>
                    <p className='highlight-p'>
                        <span>8.9</span>
                        Docs
                    </p>
                </div>
                <p>Why we love it</p>
                <div className="cdk-feature">
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
                </div>
                <p className='more'>Show more {image} </p>
            </div>
            <div className="rating-content">
                <div className="rating-count">
                    <img src={require("../assets/images/IMAGE (5).png")} alt="" />
                    <p className='rating'>{rating}</p>
                    <p>{ratingLevel}</p>
                    <img src={stars} alt="" />
                </div>
                <button className="view">View </button>
            </div>
        </div>
    )
}

export default CdkBuilder;