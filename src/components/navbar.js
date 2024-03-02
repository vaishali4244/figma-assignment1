import '../assets/styles/navbar.scss'


const Navbar = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-input">
                    <img src={require("../assets/images/IMAGE (2).png")} alt="" />
                    <input type="text" className="" />
                </div>
                <button className="nav-btn">Categories</button>
                <button className="nav-btn">Website Builders</button>
                <button className="nav-btn">Today's deals</button>
            </div>
        </>
    )
}

export default Navbar;