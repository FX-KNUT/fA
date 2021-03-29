import { useEffect } from "react";

const CalculatorResult = ({history, result}) => {

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
            <span id="functions_calculator_result_computingArea" className="flex w-full h-2/5 bg-transparent items-end justify-end">{formattedValue}</span>
        </div>
    )

};

export default CalculatorResult;