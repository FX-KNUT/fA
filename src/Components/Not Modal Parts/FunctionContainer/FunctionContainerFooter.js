// function-container-header => h-15 (height: 15%), function-container-body => h-75 (height: 75%)
import Setting from '../../../Res/Images/Setting.png';
import { store } from '../../App';
import { SETTING_CLICKED } from '../../Reducer/Reducer';

const FunctionContainerFooter = () => {

    const onClick = e => {
        // store.dispatch({type: SETTING_CLICKED});
    }

    return (
        <div id="function_container_footer" className="">
            <div id="function_container_footer_setting" className="modal-open w-1/5 ml-4 hover:opacity-70" onClick={onClick}>
                <img src={Setting} alt="Setting" width="64px" height="64px"/>
            </div>
        </div>
    );
};

export default FunctionContainerFooter;