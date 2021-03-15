import { store } from "./App.js";
import { CAL, CALC } from "./ConstantStorage.js";
import { CALC_CLICKED, CAL_CLICKED } from "./Reducer.js";

const FunctionAnimator = e => {

    // This component requires refactoring of its algorithm inside as it's horrible.
    // CALC = 계산기, CAL = 달력

    switch(e.target.outerText) {
        case CALC:
            store.dispatch({type: CALC_CLICKED});
            return;
        case CAL:
            store.dispatch({type: CAL_CLICKED});
            return;
        default:
    }

    switch(e.target.alt) {
        case CALC:
            store.dispatch({type: CALC_CLICKED});
            return;
        case CAL:
            store.dispatch({type: CAL_CLICKED});
            return;
        default:
    }

    try {
        switch(e.target.previousSibling.outerText) {
        case CALC:
            store.dispatch({type: CALC_CLICKED});
            return;
        case CAL:
            store.dispatch({type: CAL_CLICKED});
            return;
        default:
    }   
    } catch {
        switch(e.target.childNodes[1].innerText) {
        case CALC:
            store.dispatch({type: CALC_CLICKED});
            return;
        case CAL:
            store.dispatch({type: CAL_CLICKED});
            return;
        default:
    }  
    }

}

export default FunctionAnimator;