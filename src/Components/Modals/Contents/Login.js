import { useState } from "react";
import { store } from "../../App";
// import { EMAIL, PASSWORD } from "../../ConstantStorage";
import { MODAL_CLOSE } from "../../Reducer/Reducer";
import InfoValidator from "../Logics/InfoValidator";
import LocalStorageChecker from "../Logics/LocalStorageChecker";
import ToggleModal from "../Logics/ToggleModal";

const Login = () => {

    const [init_email, init_password, init_isEmailChecked, init_isInfoChecked] = LocalStorageChecker();

    const [email, setEmail] = useState(init_email),
        [password, setPassword] = useState(init_password),
        [isEmailChecked, setIsEmailChecked] = useState(init_isEmailChecked),
        [isInfoChecked, setIsInfoChecked] = useState(init_isInfoChecked);

    const modal_footer = document.querySelector("#modal_footer");
    modal_footer.classList.add("hidden");

    const onChange = e => {

        const {target: {name, value}} = e;

        if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        } else if(name === "storeEmail") {
            setIsEmailChecked(prev => !prev);
        } else if(name === "storeInfo") {
            setIsInfoChecked(prev => !prev);
        }

        // 이메일 저장, 로그인 정보 저장 등은 로그인 구현 완료 이후 활용 예정
        
    };

    const onSubmit = async e => {
        e.preventDefault();
        if(!InfoValidator(email, password)) return;
        console.log("login button pushed");
        // promise, axios
    }

    const onClick = e => {
        const {target: {name}} = e;
        
        if(name === "회원가입" || "아이디찾기" || "비밀번호찾기") {
            const newWindow = window.open('/#/'.concat(name), name, "menubar=no, status=no, titlebar=no, toolbar=no");
            newWindow.focus();
        } else if (name === "keepOffline") {
            console.log("keepOffline")
            store.dispatch({type: MODAL_CLOSE});
            ToggleModal();
        }
        
    };

    return (
        <>
            <div name="keepOffline" id="modal_contents_offline" className="">
                <input id="offline" name="keepOffline" type="button" className="mt-2 mb-4 bg-transparent p-1 rounded-lg text-indigo-500 hover:text-indigo-700 hover:underline " value="오프라인 유지" onClick={onClick} />
            </div>
            <div name="submitForm" id="modal_contents_login" className="" onSubmit={onSubmit}>
                <form name="modal_contents_form" className="">
                    <div id="email_div" className="border-8 border-white">
                        <input id="email" name="email" type="text" placeholder="이메일" value={email} onChange={onChange} className="text-lg" size="32" required />
                    </div>
                    <div id="password_div" className="border-8 border-white">
                        <input id="password" name="password" type="password" placeholder="비밀번호" value={password} onChange={onChange} className="text-lg" size="32" required />
                    </div>
                    <div id="checkbox_div" className="mt-2 ml-2">
                        <label className="mr-4"><input id="storeId" name="storeEmail" type="checkbox" className="" checked={isEmailChecked} onChange={onChange}/> 이메일 저장</label>
                        <label><input id="store_account_info" name="storeInfo" type="checkbox" className="" checked={isInfoChecked} onChange={onChange}/> 로그인 정보 저장</label>
                    </div>
                    <div id="submit_div" className="flex mt-4 justify-center md:text-center text-base">
                        <input id="submit" type="submit" name="login" className="mr-4 px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" value="로그인" />
                    </div>
                    <div id="find_div" className="flex flex-col mt-2 items-end mr-2">
                        <input id="회원가입" type="button" name="회원가입" className="mt-1 px-2 w-1/5 bg-transparent p-1 rounded-lg text-indigo-500 cursor-pointer hover:text-indigo-700 hover:underline text-right" value="회원 가입" onClick={onClick}/>
                        <input id="아이디찾기" type="button" name="아이디찾기" className="mt-1 px-2 w-24 bg-transparent p-1 rounded-lg text-indigo-500 cursor-pointer hover:text-indigo-700 hover:underline text-right" value="아이디 찾기" onClick={onClick}/>
                        <input id="비밀번호찾기" type="button" name="비밀번호찾기" className="mt-1 px-2 w-28 bg-transparent p-1 rounded-lg text-indigo-500 cursor-pointer hover:text-indigo-700 hover:underline text-right" value="비밀번호 찾기" onClick={onClick}/>
                    </div>
                    <div id="error_shooter" className="mt-4 p-2 invisible bg-red-900 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                        <span className="flex w-10 rounded-full text-center bg-pink-600 px-2 py-1 text-xs font-bold mr-3">에러</span>
                        <span id="error_message" className="text-indigo-50 font-semibold mr-2 text-left flex-auto">테스트</span>
                    </div>
                </form>
            </div>        
        </>

    );
};

export default Login;