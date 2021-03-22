// import { funcs_className, functions, selectBtn, selectBtn_className } from "../ConstantStorage";

import { init_functions_calculator_className, init_functions_calendar_className, init_functions_className, init_select_button_circle_className } from "../ConstantStorage";
import PlaceInitializer from "./PlaceInitializer";

const AnimationSynchronizer = (state) => {

    // const { degree } = state;

    // This component requires refactoring of its algorithm inside as it's horrible.

    const {selected, degree, func_arr} = state;
    const selectBtn = document.querySelector("#select_button_circle");
    const functions = document.querySelector("#functions");
    const calc = document.querySelector("#functions_calculator");
    const cal = document.querySelector("#functions_calendar");

    console.log(state);
    console.log(state.func_arr);

    if(degree > 0) PlaceInitializer();

    switch(degree) {
        case 3:
            selectBtn.classList.replace("right-select-bar", "selectbtn-two");
            functions.classList.replace("-right-1/4", "right-0");
            func_arr[0].value.classList.replace("-right-1/4", "firstfunction");
            func_arr[1].value.classList.replace("-right-1/4", "secondfunction");
            break;
        case 2: 
            if (selected) {
                selectBtn.classList.replace("right-select-bar", "selectbtn-one");
                functions.classList.replace("-right-1/4", "right-0");
                func_arr[0].value.classList.replace("-right-1/4", "firstfunction");
            } else {
                selectBtn.classList.replace("right-select-bar", "selectbtn-twofunc");
                func_arr[0].value.classList.replace("-right-1/4", "right-0");
                func_arr[1].value.classList.replace("-right-1/4", "right-1/4");
            }
            break;
        case 1:
            if (selected) {
                selectBtn.classList.replace("right-select-bar", "selectbtn-clicked");
                functions.classList.replace("-right-1/4", "right-0");
            } else {
                selectBtn.classList.replace("right-select-bar", "selectbtn-onefunc");
                functions.classList.replace("right-0", "-right-1/4");
                cal.className = init_functions_calendar_className;
                calc.className = init_functions_calculator_className;
                func_arr[0].value.classList.replace("-right-1/4", "right-0");
            }
            break;
        case 0:
            selectBtn.className = init_select_button_circle_className;
            functions.className = init_functions_className;
            break;
        default:
            console.log(degree);
            console.log(func_arr);
    }
}

export default AnimationSynchronizer;