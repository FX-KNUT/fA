import { store } from "../App.js";
import { CAL, CALC } from "../ConstantStorage.js";
import { CALC_CLICKED, CAL_CLICKED } from "../Reducer/Reducer.js";

const FunctionAnimator = outerHTML => {

    if(outerHTML.includes(CALC)) {
        store.dispatch({type: CALC_CLICKED});
    }
    else if(outerHTML.includes(CAL)) {
        store.dispatch({type: CAL_CLICKED}); 
    }

}

export default FunctionAnimator;