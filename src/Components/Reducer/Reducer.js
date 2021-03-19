import AnimationSynchronizer from "../Animators/AnimationSynchronizer";
import StateValidator from "./StateValidator.js";

export const SELECT_BTN_CLICKED = "select button clicked";
export const CALC_CLICKED = "Calculator div clicked";
export const CAL_CLICKED = "Calendar div clicked";
export const CONFIGURATION = "configuration";
export const DESTROY = "destructor";
export const SELECT_BTN_FIRST_CLICKED = "select button first clicked";
export const DEGREE_UP = "increase degree by 1";
export const DEGREE_DOWN = "decrease degree by 1";
export const FUNCTION_CLOSER = "close button at the top right side of FunctionContainerHeader";

const reducer = (state = {
                    selected: false,
                    first_clicked: false,
                    degree: 0, 
                    func_arr: []    
                                    }, action) => {

    switch(action.type){
        case CONFIGURATION:
            console.log(state, "hehe");
            state.selected = false;
            return state;
        case SELECT_BTN_CLICKED:
            state.first_clicked = true;
            state.selected = !state.selected;
            state.selected ? state.degree++ : state.degree--;
            AnimationSynchronizer(state);
            return state;
        case DEGREE_UP:
            state.degree = StateValidator(state.degree) && state.degree++;  
            return state;
        case DEGREE_DOWN:
            state.degree = StateValidator(state.degree) && state.degree--;
            return state;
        case CALC_CLICKED:
            state.degree++;
            if(state.degree === StateValidator(state.degree)) {
                try {
                    const CALC_SELECTOR = document.querySelector("#functions_calculator"),
                          keySearcher = state.func_arr.find((ele) => {
                                if(ele.name === CALC_SELECTOR) return true;
                            });
                    if (typeof keySearcher === undefined) {
                        state.func_arr.push(CALC_SELECTOR);
                    } else if (keySearcher.clicked === false) {
                        state.func_arr.push(CALC_SELECTOR);
                    } else {
                        state.func_arr.splice(state.func_arr.indexOf(keySearcher), 1);                            
                    }
                    AnimationSynchronizer(state); 
                } catch (e) {
                    console.error(e);
                }
       
            } else {
                state.degree--;
            }
            return state;
        case CAL_CLICKED:
            state.degree++;
            if(state.degree === StateValidator(state.degree)) {
                try {
                    const CAL_SELECTOR = document.querySelector("#functions_calendar"),
                          keySearcher = state.func_arr.find((ele) => {
                                if(ele.name === CAL_SELECTOR) return true;
                            });

                            if (typeof keySearcher === undefined) {
                                state.func_arr.push(CAL_SELECTOR);
                            } else if (keySearcher.clicked === false) {
                                state.func_arr.push(CAL_SELECTOR);
                            } else {
                                state.func_arr.splice(state.func_arr.indexOf(keySearcher), 1);                            
                            }
                    AnimationSynchronizer(state);
                } catch (e) {
                    console.error(e);
                }

            } else {
                state.degree--;
            }
            return state;
        case FUNCTION_CLOSER:
            state.degree = 0;
            state.selected = false;
            AnimationSynchronizer(state);
            return state;
        case DESTROY:
            // do nothing yet
            return state;
        default:
            return state;
    };
};

export default reducer;