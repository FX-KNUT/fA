import React, { useState } from "react";
import { store } from "../../../../App";
import CalculatorKeys from "./CalculatorKeys";

const CalculatorCore = () => {

    const [ result, setResult ] = useState(2);
    const [ operator, setOperator] = useState(null);
    const [ value, setValue] = useState(null);
    const [ history, setHistory ] = useState('');
    const [ operatorListener, setOperatorListener] = useState(false);

    const clear = () => {
        setResult('0');
        setOperator(null);
        setValue(null);
        setHistory('');
        setOperatorListener(false);
    };

    const operations = {
        '/': (prevValue, nextValue) => prevValue / nextValue,
        '*': (prevValue, nextValue) => prevValue * nextValue,
        '%': (prevValue, nextValue) => prevValue % nextValue,
        '+': (prevValue, nextValue) => prevValue + nextValue,
        '-': (prevValue, nextValue) => prevValue - nextValue,
        '=': (prevValue, nextValue) => nextValue
    };

    const keyUpEvent = e => {
        let { key } = e;
        if (key === 'Enter') key = '=';
        if ((/\d/).test(key)) {
            e.preventDefault();
            appendNum(parseInt(key, 10));
        } else if (key in operations) {
            e.preventDefault();
            operatorSetter(key);
        } else if (key === '.') {
            e.preventDefault();
            appendDot();
        } else if (key === 'Backspace') {
            e.preventDefault();
            backspace();
        } else if (key === 'Clear') {
            e.preventDefault();
            if (result !== '0') setResult('0');
            else clear();
        } else if (key === 'f5') {
            window.location.reload();
        }
    };

    const CalculatorEventListener = () => {
        const {calculator} = store.getState();
        if (calculator) document.addEventListener('keyup', keyUpEvent);
        else document.removeEventListener('keyup', keyUpEvent);
    };

    store.subscribe(CalculatorEventListener);

    const appendNum = num => {
        if(operatorListener) {
            setResult(String(num));
            setOperatorListener(false);
        } else {
            setResult(result === '0' ? String(num) : result + num);
            console.log(result);
            console.log(num);
        }
    };

    const operatorSetter = op => {
        const inputValue = parseFloat(result);
        if (value === null) setValue(inputValue);
        else if (operator) {
            const currentValue = value || 0;
            const newValue = operations[operator](currentValue, inputValue);
            setValue(newValue);
            setResult(String(newValue));
            if(op === '=') ref.current.focus();
        }
        setOperatorListener(true);
        setOperator(op);
    };

    const appendDot = () => {
        if(!(/\./).test(result)) {
            setResult(result + ".");
            setOperatorListener(false);
        }
        setResult(result.concat(String(".")));
    };

    const toggleSign = () => {
        setResult(String(parseFloat(result * (-1))));
    };

    const backspace = () => {
        try { setResult(result.substring(0, result.length - 1)); }
        catch { setResult('0'); }
    }

    const ref = React.createRef();

    const CalculatorResult = React.forwardRef((_, ref) => {
    
        const language = navigator.language || 'ko-KR';
        let formattedValue = parseFloat(result).toLocaleString(language, {
          useGrouping: true,
          maximumFractionDigits: 6
        });
    
        const match = result.match(/\.\d*?(0*)$/);
        
        if (match) formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0];

        return (
            <div id="functions_calculator_result" name="res" className="flex flex-col rounded-md h-1/5 w-full bg-gray-50 shadow-sm px-8 py-4 focus:ring-2 focus:ring-blue-400">
                <span id="functions_calculator_result_history" className="flex-1 w-full bg-transparent items-end shadow-md overflow-x-hidden overflow-y-scroll">{history}</span>
                <span id="functions_calculator_result_computingArea" ref={ref} className="flex w-full h-2/5 bg-transparent items-end justify-end">{formattedValue}</span>
            </div>
        );
    });

    return (
        <div id="functions_calculator_core" className="w-full h-full rounded-3xl bg-yellow-50 hover:bg-yellow-100 px-4 py-4 shadow-lg">
            <CalculatorResult ref={ref} />
            <div id="functions_calculator_smallspace" className="h-3p"></div>
            <CalculatorKeys {...{operatorSetter, backspace, appendNum, toggleSign, appendDot, clear} } />
        </div>
    );
};

export default CalculatorCore;