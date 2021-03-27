import { useState } from "react";
import { init_functions_calculator_className } from "../../../ConstantStorage";

const Calculator = () => {

    const [ result, setResult ] = useState('');

    const onClick = e => {
        const {target: {innerText}} = e;
        setResult(innerText);
    }

    return (
        <div id="functions_calculator" className={init_functions_calculator_className}>
            <div id="functions_calculator_header" className="h-1/6">
            헤더
            </div>
            <div id="functions_calculator_body" className="h-4/6 flex rounded-md px-4 py-4">
                <div id="functions_calculator_core" className="w-full h-full rounded-3xl bg-yellow-50 px-4 py-4">
                    <div id="functions_calculator_result" name="res" className="flex rounded-md items-end justify-end h-1/5 w-full bg-gray-50 px-8 py-4">{result}</div>
                    <div id="functions_calculator_smallspace" className="h-3p"></div>
                    <div id="functions_calculator_keys" className="grid grid-cols-4 h-77p w-full bg-pink-50 px-4 py-4 gap-2 text-xl">
                        <div id="functions_calculator_div" name="/" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>/</div>
                        <div id="functions_calculator_mul" name="*" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>*</div>
                        <div id="functions_calculator_mod" name="%" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>%</div>
                        <div id="functions_calculator_backspace" name="<" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>◀</div>
                        
                        <div id="functions_calculator_7" name="7" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>7</div>
                        <div id="functions_calculator_8" name="8" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>8</div>
                        <div id="functions_calculator_9" name="9" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>9</div>
                        <div id="functions_calculator_-" name="-" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>-</div>
                        
                        <div id="functions_calculator_4" name="4" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>4</div>
                        <div id="functions_calculator_5" name="5" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>5</div>
                        <div id="functions_calculator_6" name="6" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>6</div>
                        <div id="functions_calculator_+" name="+" className="flex rounded-md items-center justify-center bg-pink-100 row-span-2" onClick={onClick}>+</div>
                        
                        <div id="functions_calculator_1" name="1" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>1</div>
                        <div id="functions_calculator_2" name="2" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>2</div>
                        <div id="functions_calculator_3" name="3" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>3</div>
                        
                        <div id="functions_calculator_0" name="0" className="flex rounded-md items-center justify-center bg-pink-100 col-span-2" onClick={onClick}>0</div>
                        <div id="functions_calculator_dot" name="." className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>.</div>
                        <div id="functions_calculator_enter" name="=" className="flex rounded-md items-center justify-center bg-pink-100" onClick={onClick}>=</div>
                    </div>
                </div>
            </div>
            <div id="functions_calculator_footer" className="h-1/6">
                History
            </div>
        </div>
    );
}

export default Calculator;