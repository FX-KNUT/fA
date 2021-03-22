// selectbtn-clicked (right: 21%), selectbtn-one(right: 46%), selectbtn-two(right: 71%)
// functionbarposition (right: 20%), firstfunction(right: 45%), secondfunction(right: 70%)

import SelectButton from "../Res/Images/SelectBar.png";
import { store } from "./App";
import { init_select_button_circle_className } from "./ConstantStorage.js";
import { SELECT_BTN_CLICKED } from "./Reducer/Reducer";

const SelectBar = () => {

    const onSelectButtonClicked = e => {
        store.dispatch({type: SELECT_BTN_CLICKED});
    }

    return (
        <div id="select_button_circle" className={init_select_button_circle_className}
                                                    onClick={onSelectButtonClicked}>

            <img src={SelectButton} alt="Select Button" width="60px" height="60px" className="opacity-80 hover:opacity-100"/>
        </div>
    );
};

export default SelectBar;