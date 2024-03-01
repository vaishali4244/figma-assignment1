import '../assets/styles/footer.scss';

const Footer = () => {
    return (
            <div className="footer-container">
                <div className="content">
                    <p>CATEGORIES</p>
                    <p className="footer-p">Web Builder</p>
                    <p className="footer-p">Hosting</p>
                    <p className="footer-p">Data Center</p>
                    <p className="footer-p">Robotic-Automation</p>
                </div>
                <div className="content">
                    <p>CONTACT</p>
                    <p className="footer-p">Contact</p>
                    <p className="footer-p">Privacy Policy</p>
                    <p className="footer-p">Terms Of Service</p>
                    <p className="footer-p">Categories</p>
                    <p className="footer-p">About</p>
                </div>
                <div className="side-menu">
                    <p className="footer-p">United States</p>
                    <img src={require('../assets/images/IMAGE (10).png')} alt="" />
                </div>
            </div>
    )
}

export default Footer;