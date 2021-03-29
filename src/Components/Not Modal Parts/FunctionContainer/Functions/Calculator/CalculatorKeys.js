import { init_functions_calculator_divs_className } from "../../../../ConstantStorage";

const CalculatorKeys = ({operatorSetter, backspace, appendNum, toggleSign, appendDot, clear}) => {
    return (
        <div id="functions_calculator_keys" className="grid grid-cols-4 h-77p w-full bg-pink-50 px-4 py-4 gap-2 text-xl">
            <div id="functions_calculator_div" name="/" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("/")}>/</div>
            <div id="functions_calculator_mul" name="*" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("*")}>*</div>
            <div id="functions_calculator_mod" name="%" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("%")}>%</div>
            <div id="functions_calculator_backspace" name="<" className={`${init_functions_calculator_divs_className} bg-pink-400 hover:bg-pink-500`} onClick={() => backspace()}>◀</div>
            
            <div id="functions_calculator_7" name="7" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(7)}>7</div>
            <div id="functions_calculator_8" name="8" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(8)}>8</div>
            <div id="functions_calculator_9" name="9" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(9)}>9</div>
            <div id="functions_calculator_-" name="-" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => toggleSign()}>±</div>
            
            <div id="functions_calculator_4" name="4" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(4)}>4</div>
            <div id="functions_calculator_5" name="5" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(5)}>5</div>
            <div id="functions_calculator_6" name="6" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(6)}>6</div>
            <div id="functions_calculator_+" name="+" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("-")}>-</div>
            
            <div id="functions_calculator_1" name="1" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(1)}>1</div>
            <div id="functions_calculator_2" name="2" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(2)}>2</div>
            <div id="functions_calculator_3" name="3" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendNum(3)}>3</div>
            <div id="functions_calculator_+" name="+" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("+")}>+</div>
            
            <div id="functions_calculator_0" name="0" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 col-span-2`} onClick={() => appendNum(0)}>0</div>
            <div id="functions_calculator_dot" name="." className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => appendDot()}>.</div>
            <div id="functions_calculator_enter" name="=" className={`${init_functions_calculator_divs_className} bg-pink-400 hover:bg-pink-500`} onClick={() => operatorSetter("=")}>=</div>

            <div id="functions_calculator_clear" name="clear" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 col-span-4`} onClick={() => clear()}>Clear</div>
        </div>
    );
};

export default CalculatorKeys;