import { init_functions_calendar_className } from "../../../ConstantStorage";

const Calendar = () => {
    return (
        <div id="functions_calendar" className={init_functions_calendar_className}>
            <div id="functions_calendar_header" className="h-1/5">
            헤더
            </div>
            <div id="functions_calendar_body" className="h-3/5">
            바디
            </div>
            <div id="functions_calendar_footer" className="h-1/5">
            푸터
            </div>
        </div>
    );
}

export default Calendar;