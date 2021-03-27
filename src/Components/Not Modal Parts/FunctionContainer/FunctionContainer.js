// function-container-header => h-15 (height: 15%), function-container-body => h-75 (height: 75%)

import FunctionContainerFooter from "./FunctionContainerFooter.js"
import FunctionContainerHeader from "./FunctionContainerHeader.js"
import FunctionContainerBody from "./FunctionContainerBody.js"

// SelectBar 누르면 오른쪽에서 밀려나오는 기능 그릇
const FunctionContainer = () => {

    return (
        <div id="function_container" className="h-full text-lg">
            <FunctionContainerHeader />
            <FunctionContainerBody />
            <FunctionContainerFooter />
        </div>
    );
};

export default FunctionContainer;