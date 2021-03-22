import { init_functions_calculator_className, init_functions_calendar_className, init_functions_className, init_select_button_circle_className } from "../ConstantStorage";

const PlaceInitializer = () => {

    const selectBtn = document.querySelector("#select_button_circle");
    const functions = document.querySelector("#functions");
    const calc = document.querySelector("#functions_calculator");
    const cal = document.querySelector("#functions_calendar");

    selectBtn.className = init_select_button_circle_className;
    functions.className = init_functions_className;
    calc.className = init_functions_calculator_className;
    cal.className = init_functions_calendar_className;

};

export default PlaceInitializer;