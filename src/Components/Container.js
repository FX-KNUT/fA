import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Container = () => {

    return (                
        <div className="justify-items-start">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export default Container;  