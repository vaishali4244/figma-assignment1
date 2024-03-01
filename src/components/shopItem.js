import '../assets/styles/shopItem.scss';


const ShopItem = () => {
    return (
        <div className="item-container">
            <img src={require("../assets/images/download 1.png")} alt="" />
            <div className="discount">
                <p>20% Off</p>
                <p>Limited time </p>
            </div>
            <p className='name'>Webbuilder 1</p>
            <p>Computer  Modern clasic with wix support</p>
            <div className="item-price">
                <p className='p1'>$39.96</p>
                <p className='p2'>$49.96</p>
                <p className='p3'>(20% Off)</p>
            </div>
            <button>View Deal</button>
        </div>
    )
}

export default ShopItem;