import { functions_className } from "../../ConstantStorage";
import SelectBar from "../../SelectBar";
import FunctionContainer from "../FunctionContainer/FunctionContainer";
import Calculator from "../FunctionContainer/Functions/Calculator/Calculator.js";
import Calendar from "../FunctionContainer/Functions/Calendar/Calendar.js";
import Container from "./Container";

const BodyParts = () => {
    return (
        <div id="background" className="min-h-screen inset-0 bg-yellow-100 bg-opacity-70">
        <section id="wrap" className="absolute w-screen h-screen">
          <Container />
          <SelectBar />
        </section>
        <section id="functions" className={functions_className}>
          <FunctionContainer />
        </section>
        {/* Functions */}
        <Calculator />
        <Calendar />
      </div>
    );
};

export default BodyParts;