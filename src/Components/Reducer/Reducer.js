import AnimationSynchronizer from "../Animators/AnimationSynchronizer";
import { CAL, CALC, SETTING } from "../ConstantStorage";
// import ModalResovler from "../Modals/Logics/ModalResolver";
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
export const SETTING_CLICKED = "setting image has been selected so modal expected to be popped";
export const MODAL_CLOSE = "modal expected to be closed";
export const SIGN_IN = "로그인";

const reducer = (state = {
                    selected: false,
                    first_clicked: false,
                    degree: 0, 
                    func_arr: [],
                    modal_mode: undefined,
                    isLoggedIn: false
                                    }, action) => {

    switch(action.type){
        // case CONFIGURATION:
        //     state.selected = false;
        //     return state;
            
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
            if(state.degree === StateValidator(state.degree)) {

                const CALC_SELECTOR = document.querySelector("#functions_calculator"),
                        keySearcher = state.func_arr.find(ele => ele.name === CALC);
                if (keySearcher === undefined || keySearcher.clicked === false) {
                    state.func_arr.push({name: CALC, value: CALC_SELECTOR, clicked: true});
                    state.degree++;
                } else {
                    state.func_arr.splice(state.func_arr.indexOf(keySearcher), 1);   
                    state.degree--;                           
                }
                AnimationSynchronizer(state); 
            } else {
                state.degree--;
            }
            return state;

        case CAL_CLICKED:
            if(state.degree === StateValidator(state.degree)) {
                
                const CAL_SELECTOR = document.querySelector("#functions_calendar"),
                        keySearcher = state.func_arr.find(ele => ele.name === CAL);
                if (keySearcher === undefined || keySearcher.clicked === false) {
                    state.func_arr.push({name: CAL, value: CAL_SELECTOR, clicked: true});
                    state.degree++;
                } else {
                    state.func_arr.splice(state.func_arr.indexOf(keySearcher), 1); 
                    state.degree--;                         
                }
                    AnimationSynchronizer(state);
                } else {
                    state.degree--;
                }
                return state;

        case FUNCTION_CLOSER:
            state.degree = 0;
            state.selected = false;
            AnimationSynchronizer(state);
            return state;

        case SETTING_CLICKED:
            state.modal_mode = SETTING;
            return state;

        case SIGN_IN:
            state.modal_mode = SIGN_IN;
            return state;
            
        case MODAL_CLOSE:
            state.modal_mode = undefined;
            return state;

        case DESTROY:
            // do nothing yet
            return state;

        default:
            return state;
    };
};

export default reducer;