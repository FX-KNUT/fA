// function-container-header => h-15 (height: 15%), function-container-body => h-75 (height: 75%)
import Setting from '../../Res/Images/Setting.png'

const FunctionContainerFooter = () => {

    return (
        <div id="function_container_footer" className="">
            <div id="function_container_footer_setting" className="w-1/5 ml-4 hover:opacity-70">
                <img src={Setting} alt="Setting" width="64px" height="64px"/>
            </div>
        </div>
    );
};

export default FunctionContainerFooter;