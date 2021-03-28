import { useState } from "react";
import { init_functions_calculator_className, init_functions_calculator_divs_className } from "../../../ConstantStorage";

const Calculator = () => {

    const [ result, setResult ] = useState('');
    const [ operator, setOperator] = useState(undefined);
    const [ operand, setOperand] = useState(0.0);
    const [ history, setHistory ] = useState('');
    const [ isDisplaying, setIsDisplaying ] = useState(false);
    const [ isOperatorConfirmed, setIsOperatorConfirmed] = useState(true);
    const [ resultStorage, setResultStorage ] = useState(undefined);
    const [ isFinal, setIsFinal ] = useState(false);

    const operations = {
        '/': (prevValue = 1, nextValue) => String(parseInt(`${prevValue} / ${nextValue}`)),
        '*': (prevValue = 1, nextValue) => String(parseInt(`${prevValue} * ${nextValue}`)),
        '%': (prevValue = 1, nextValue) => String(parseInt(`${prevValue} % ${nextValue}`)),
        '+': (prevValue = 0, nextValue) => String(parseInt(`${prevValue} + ${nextValue}`)),
        '-': (prevValue = 0, nextValue) => String(parseInt(`${prevValue} - ${nextValue}`))
    }

    const appendDigit = num => {
        if(isDisplaying) {
            setIsOperatorConfirmed(true);
            setIsDisplaying(false);
            setResult(String(num));
            if(isFinal) {
                setHistory('');
                setIsFinal(false);
            }
        }
        else setResult(result.concat(String(num)));
    };

    const operatorSetter = op => {
        if(isOperatorConfirmed === true) {
            setHistory(history.concat(`${result} ${op} `));
            if(op === '=') {
                console.log(result);
                console.log(op);
                console.log(operator);
                console.log(operand);
                console.log(resultStorage);
                console.log(typeof resultStorage);
                console.log(typeof result);
                setResult(operations[operator](resultStorage, result));
                console.log(result);
                setHistory(history.concat(result));
                setIsFinal(true);
                setIsDisplaying(true);
            }
            else {
                setOperator(op);
                setOperand(result);
                setIsDisplaying(true);
                setIsOperatorConfirmed(false);
                console.log(result);
                console.log(operand);
                console.log(resultStorage);
                if(resultStorage === undefined) setResultStorage(result);
                console.log(resultStorage);
                setResultStorage(operations[op](resultStorage, operand));
            }
        } else return;
    }

    // const handleOperator = op => {
    //     if(operator === undefined) {
    //         if(op === "=") return;
    //         setOperator(op);
    //         setOperand(result);
    //         setHistory(history.concat(result, ` ${op} `));
    //         setHistory()
    //         setIsDisplaying(true);
    //     } else {
    //         setHistory(history.concat(result, ` ${op} `));
    //         if(op === "=") {

    //         } else {    
    //             setResult(operations[op](Number(operand), Number(result)));
    //             setIsDisplaying(true);
    //         }
    //     }
    // };

    const appendDot = () => {
        setResult(result.concat(String(".")));
    };

    const toggleSign = () => {
        if(result.includes("-")) {
            setResult(result.replace("-", ""));
        } else {
            setResult("-".concat(result));
        }
    };

    const backspace = () => {
        setResult(result.slice(0, -1));
    }

    const clear = () => {
        setResult("");
        setOperator(undefined);
        setOperand(0.0);
        setHistory("");
        setIsDisplaying(false);
        setIsOperatorConfirmed(true);
        setResultStorage(undefined);
        setIsFinal(false);
    }

    return (
        <div id="functions_calculator" className={init_functions_calculator_className}>
            <div id="functions_calculator_header" className="h-1/6">
            헤더
            </div>
            <div id="functions_calculator_body" className="h-4/6 flex rounded-md px-4 py-4">
                <div id="functions_calculator_core" className="w-full h-full rounded-3xl bg-yellow-50 hover:bg-yellow-100 px-4 py-4 shadow-lg">
                    <div id="functions_calculator_result" name="res" className="flex flex-col rounded-md h-1/5 w-full bg-gray-50 shadow-sm px-8 py-4">
                        <span id="functions_calculator_result_history" className="flex h-1/5 w-full bg-transparent items-end shadow-md">{history}</span>
                        <span id="functions_calculator_result_computingArea" className="flex w-full h-4/5 bg-transparent items-end justify-end ">{result}</span>
                    </div>
                    <div id="functions_calculator_smallspace" className="h-3p"></div>
                    <div id="functions_calculator_keys" className="grid grid-cols-4 h-77p w-full bg-pink-50 px-4 py-4 gap-2 text-xl">
                        <div id="functions_calculator_div" name="/" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("/")}>/</div>
                        <div id="functions_calculator_mul" name="*" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("*")}>*</div>
                        <div id="functions_calculator_mod" name="%" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("%")}>%</div>
                        <div id="functions_calculator_backspace" name="<" className={`${init_functions_calculator_divs_className} bg-pink-400 hover:bg-pink-500`} onClick={() => backspace()}>◀</div>
                        
                        <div id="functions_calculator_7" name="7" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(7)}>7</div>
                        <div id="functions_calculator_8" name="8" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(8)}>8</div>
                        <div id="functions_calculator_9" name="9" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(9)}>9</div>
                        <div id="functions_calculator_-" name="-" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => toggleSign()}>±</div>
                        
                        <div id="functions_calculator_4" name="4" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(4)}>4</div>
                        <div id="functions_calculator_5" name="5" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(5)}>5</div>
                        <div id="functions_calculator_6" name="6" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(6)}>6</div>
                        <div id="functions_calculator_+" name="+" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("-")}>-</div>
                        
                        <div id="functions_calculator_1" name="1" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(1)}>1</div>
                        <div id="functions_calculator_2" name="2" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(2)}>2</div>
                        <div id="functions_calculator_3" name="3" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 `} onClick={() => appendDigit(3)}>3</div>
                        <div id="functions_calculator_+" name="+" className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => operatorSetter("+")}>+</div>
                        
                        <div id="functions_calculator_0" name="0" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 col-span-2`} onClick={() => appendDigit(0)}>0</div>
                        <div id="functions_calculator_dot" name="." className={`${init_functions_calculator_divs_className} bg-pink-300 hover:bg-pink-400 `} onClick={() => appendDot()}>.</div>
                        <div id="functions_calculator_enter" name="=" className={`${init_functions_calculator_divs_className} bg-pink-400 hover:bg-pink-500`} onClick={() => operatorSetter("=")}>=</div>

                        <div id="functions_calculator_clear" name="clear" className={`${init_functions_calculator_divs_className} bg-pink-100 hover:bg-pink-200 col-span-4`} onClick={() => clear()}>Clear</div>
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