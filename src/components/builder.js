import '../assets/styles/_builder.scss';



const Builder = ({ hide, choiceImg, choiceTag, number, imgName, title, intro, image, highlights, rating, ratingLevel, stars }) => {


    return (
        <>
            {hide ? null : <div className="builder-choice" >
                <img src={choiceImg} alt="" />
                <p>{choiceTag}</p>
            </div>}

            <div className="builder-container buid-1">
                <div className="img">
                    <p className='builder-number'>{number}</p>
                    <img src={require("../assets/images/download 1.png")} alt="" />
                    <p>{imgName}</p>
                </div>
                <div className="builder-content">
                    <p>
                        <span>{title}</span>
                        {intro}
                    </p>
                    <h5>Main highlights</h5>
                    <p className='side-p'>[What You Get]:{highlights}</p>
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
        </>
    )
}

export default Builder;