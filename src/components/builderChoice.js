import Builder from "./builder";
import CdkBuilder from "./cdkBuilder";



const BuilderChoice = () => {


    return (

        <div className="all-builder-container">
            <Builder
                imgName="Builder 1"
                title="WixPro 72-Inch Responsive Website Builder-" intro="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
                image={<img src={require("../assets/images/blueIMAGE.png")} alt="" />}
                highlights=" Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
                rating="9.8"
                ratingLevel="Exceptional"
                stars={require("../assets/images/IMAGE (4).png")}
            />

            <Builder
                imgName="Builder"
                title="SiteCraft 68-Inch Ultimate Web Design Studio-" intro=" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
                image={<img src={require("../assets/images/blueIMAGE.png")} alt="" />}
                highlights="Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
                rating="9.5"
                ratingLevel="Excellent"
                stars={require("../assets/images/IMAGE (3).png")}
            />
            
            <Builder imgName="Builder 1"
                title="WixPro 72-Inch Responsive Website Builder-" intro=" Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
                image=""
                highlights="Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
                rating="9.3"
                ratingLevel="Exceptional"
                stars={require("../assets/images/IMAGE (4).png")}
            />

            <CdkBuilder imgName="CDK"
                title=" CDK Resposive Builder:" intro=" An extensive library of widgets and apps, and detailed step-by-step guides"
                image=""
                highlights="Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
                rating="9.1"
                ratingLevel="Very Good"
                stars={require("../assets/images/IMAGE4.png")}
            />
        </div>
    )
}

export default BuilderChoice;