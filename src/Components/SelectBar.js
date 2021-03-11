// selectbtn-clicked (right: 20%), selectbtn-one(right: 45%), selectbtn-two(right: 70%)
// functionbarposition (right: 15%), firstfunction(right: 40%), secondfunction(right: 65%)
// functioncontainer (right: -25%)

// import FunctionContainer from "./FunctionContainer";
import SelectButton from "../Res/Images/SelectBar.png"

const onSelectButtonClicked = e => {
    const btn = document.querySelector("#select_button_circle");
    console.log(e);
    if(btn.classList.contains("selectbtn-clicked")) {
        btn.classList.remove("selectbtn-clicked");
    } else {
        btn.classList.add("selectbtn-clicked");
    }
}

const SelectBar = () => {
    return (
        <div id="select_button_circle" className="absolute top-0 right-0 flex items-center justify-center
                                                    rounded-full h-20 w-20 border-4 border-transparent
                                                    hover:shadow-2xl
                                                    hover:opacity-100 transition-all ease-in-out
                                                    duration-700 transform slide"
                                                    onClick={onSelectButtonClicked}>

            <img src={SelectButton} alt="Select Button" width="60px" height="60px" className="opacity-80 hover:opacity-100"/>
        </div>
        // map 함수 사용하여 기능이 존재하는 만큼 <FunctionContainer /> 컴포넌트를 호출하여 오른쪽에 미리 숨겨두자
    );
};

export default SelectBar;