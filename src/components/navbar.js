import '../assets/styles/navbar.scss'


const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-input">
                    <img src={require("../assets/images/IMAGE (2).png")} alt="" />
                    <input type="text" className="" />
                </div>
                <a href="#" className="nav-btn">Categories</a>
                <a href="#" className="nav-btn">Website Builders</a>
                <a href="#" className="nav-btn">Today's deals</a>
            </div>
        </>
    )
}

export default Navbar;