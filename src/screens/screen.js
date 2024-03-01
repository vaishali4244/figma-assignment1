import Footer from "../components/footer";
import ShopItem from "../components/shopItem";
import BuilderChoice from "../components/builderChoice";
import Breadcrumb from "../components/breadcrumb";
import Keywords from "../components/keywords";
import Navbar from "../components/navbar";
import '../assets/styles/screen.scss'


const Screen = () => {
    const breadcrumbs = [
        { label: 'Home' },
        { label: 'Hosting for all' },
        { label: 'Hosting' },
        { label: 'Hosting6' },
        { label: 'Hosting5' },
    ];

    return (
        <>
            <Navbar />
            <div className="main-container">
                <h1>Best Website builders in the US</h1>
                <div className="page-details">
                    <div className="date">
                        <img src={require("../assets/images/IMAGE (7).png")} alt="" />
                        <p>Last Updated - February 22, 2020</p>
                        <img src={require("../assets/images/IMAGE (8).png")} alt="" />
                        <p>Advertising Disclosure</p>
                    </div>
                    <div className="dropdown">
                        <p>Top Relevant</p>
                        <img src={require("../assets/images/IMAGE (6).png")} alt="" />
                    </div>
                </div>
                <Keywords />
                <Breadcrumb crumbs={breadcrumbs} />
                <BuilderChoice />
                <h3>Related deals you might like for</h3>
                <div className="item-content">
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                </div>
                <div className="signup">
                    <p>Sign up and get exclusive special deals</p>
                    <div className="signup-input">
                        <input type="text" />
                        <button>Sign Up</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Screen;