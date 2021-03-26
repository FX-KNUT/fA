import { useState } from "react";
import { store } from "../../App";
import { MODAL_CLOSE } from "../../Reducer/Reducer";
import InfoValidator from "../Logics/InfoValidator";
import ToggleModal from "../Logics/ToggleModal";

const Login = () => {

    const [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [isIdChecked, setIsIdChecked] = useState(false),
          [isInfoChecked, setIsInfoChecked] = useState(false);

    const modal_footer = document.querySelector("#modal_footer");
    modal_footer.classList.add("hidden");

    const onChange = e => {
        const {target: {name, value}} = e;
        if(name === "email"){
            setEmail(value);
        } else if(name === "password"){
            setPassword(value);
        }    
    };

    const onSubmit = async e => {
        e.preventDefault();
        if(!InfoValidator(email, password)) return;
        console.log("login button pushed");
        // promise, axios
    }

    const onClick = e => {
        const {target: {name}} = e;
        
        if(name === "sign_up") {
            console.log("sign up");

        } else if(name === "id_lost") {
            console.log("id_lost");

        } else if (name === "pw_lost") {
            console.log("pw_lost");

        } else if (name === "keepOffline") {
            console.log("keepOffline")
            store.dispatch({type: MODAL_CLOSE});
            ToggleModal();
        }
        
    };

    const storeIdClicked = e => {

    }

    const storeInfoClicked = e => {
        
    }

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
                        <label className="mr-4"><input id="store_id" name="storeID" type="checkbox" className="" onClick={storeIdClicked}/> 아이디 저장</label>
                        <label><input id="store_account_info" name="storeInfo" type="checkbox" className="" onClick={storeInfoClicked}/> 로그인 정보 저장</label>
                    </div>
                    <div id="submit_div" className="flex mt-4 justify-center md:text-center text-base">
                        <input id="submit" type="submit" name="login" className="mr-4 px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400" value="로그인" />
                    </div>
                    <div id="find_div" className="flex flex-col mt-2 items-end mr-2">
                        <input id="sign_up" type="button" name="sign_up" className="mt-1 px-2 w-1/5 bg-transparent p-1 rounded-lg text-indigo-500 hover:text-indigo-700 hover:underline text-right" value="회원 가입" onClick={onClick}/>
                        <input id="id_lost" type="button" name="id_lost" className="mt-1 px-2 w-24 bg-transparent p-1 rounded-lg text-indigo-500 hover:text-indigo-700 hover:underline text-right" value="아이디 찾기" onClick={onClick}/>
                        <input id="pw_lost" type="button" name="pw_lost" className="mt-1 px-2 w-28 bg-transparent p-1 rounded-lg text-indigo-500 hover:text-indigo-700 hover:underline text-right" value="비밀번호 찾기" onClick={onClick}/>
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