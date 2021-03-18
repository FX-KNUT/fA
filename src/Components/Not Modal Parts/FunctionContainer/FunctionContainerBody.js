// function-container-header => h-15 (height: 15%), h-75 (height: 75%)

import FunctionAnimator from "../../Animators/FunctionAnimator";
import Functions from "./Functions/Functions";


const FunctionContainerBody = () => {

    const functions = Functions();
  
    const onClick = e => {
        FunctionAnimator(e);
    }

    return ( 
        <div id="function_container_body" className="h-75">
            {functions.map((arr, index) => {
                return (
                    <div key={index} id="function_container_body" name={arr[1]} className="flex text-center items-center align-middle hover:opacity-60" onClick={onClick} index={index}>
                        <span id="function_container_body_icon" className="w-1/5">
                            <img src={arr[0]} alt={arr[1]} width="64px" height="64px" />
                        </span>
                        <span id="function_container_body_text" className="w-3/5 h-full">
                            {arr[1]}
                        </span>
                        <span id="function_container_body_etc" className="w-1/5">
                            여백
                        </span>
                    </div>
                );
            })}
        </div>     
    
    );

};

export default FunctionContainerBody;