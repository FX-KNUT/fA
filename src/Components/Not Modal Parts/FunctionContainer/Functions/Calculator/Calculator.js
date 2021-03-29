import { init_functions_calculator_className} from "../../../../ConstantStorage";
import CalculatorCore from "./CalculatorCore";
import CalculatorFooter from "./CalculatorFooter";
import CalculatorHeader from "./CalculatorHeader";

const Calculator = () => {

    return (
        <div id="functions_calculator" className={init_functions_calculator_className}>
            <CalculatorHeader />
            <div id="functions_calculator_body" className="h-4/6 flex rounded-md px-4 py-4">
                <CalculatorCore />
            </div>
            <CalculatorFooter />
        </div>
    );
}

export default Calculator;