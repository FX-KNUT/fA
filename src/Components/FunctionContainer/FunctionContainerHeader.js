// function-container-header => h-15 (height: 15%), function-container-body => h-75 (height: 75%)

import close from "../../Res/Images/Function_Close.png";
import { store } from "./../App";
import { FUNCTION_CLOSER } from "./../Reducer/Reducer.js";

const FunctionContainerHeader = () => {

    const onClick = e => {
        store.dispatch({type: FUNCTION_CLOSER});
    };

    return (
        <div id="function_container_header" className="h-15">
            <span id="function_container_header_text" className="h-1/4 w-3/4" style={{display:"inline-block"}}>
                기능
            </span>
            <span id="function_container_header_close" className="h-1/4 float-right">
                <img src={close} alt="function closing button" width="32px" height="32px" onClick={onClick}/>
            </span>
            <div id="function_container_header_emptyspace" className="h-3/4">
                어떻게든 쓸 수 있을 것 같은 헤더 여백 부분
            </div>
        </div>
    );
};

export default FunctionContainerHeader;