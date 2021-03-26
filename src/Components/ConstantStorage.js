// className constants

export const init_select_button_circle_className = "absolute top-0 right-select-bar flex items-center justify-center rounded-full h-20 w-20 border-4 border-transparent hover:shadow-2xl hover:opacity-100 transition-all ease-in-out duration-700";
export const init_functions_className = "absolute top-0 -right-1/4 h-full bg-green-200 bg-opacity-90 functionbarsize transition-all ease-in-out duration-500";
export const init_functions_calendar_className = "absolute h-full w-1/4 -right-1/4 bg-pink-200 bg-opacity-90 transition-all ease-in-out duration-700";
export const init_functions_calculator_className = "absolute h-full w-1/4 -right-1/4 bg-purple-200 bg-opacity-90 transition-all ease-in-out duration-700";

// querySelectors

export const selectBtn = document.querySelector("#select_button_circle");
export const functions = document.querySelector("#functions");

// string constants

export const CALC = "계산기";
export const CAL = "달력";
export const SETTING = "설정";
export const EMAIL = "이메일";
export const PASSWORD = "패스워드";
export const INFO = "정보";

// initialize classnames of functions' components

export let selectBtn_className = init_select_button_circle_className;
export let functions_className = init_functions_className;
export let calendar_className = init_functions_calendar_className;
export let calculator_className = init_functions_calculator_className;