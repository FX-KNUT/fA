import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState(''),
          [password, setPassword] = useState('');

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
        // promise, axios
    }

    const onClick = e => {

    };

    return (
        <div name="submitForm" id="modal_contents_login" className="" onSubmit={onSubmit}>
            <form name="modal_contents_form" className="">
                <div id="emailDiv" className="border-8 border-white">
                    <input id="email" name="email" type="text" placeholder="이메일" value={email} onChange={onChange} className="text-lg" size="32" required />
                </div>
                <div id="passwordDiv" className="border-8 border-white">
                    <input id="password" name="password" type="password" placeholder="비밀번호" value={password} onChange={onChange} className="text-lg" size="32" required />
                </div>
                <div id="submitDiv" className="flex-auto md:text-center text-base">
                    <input id="submit" type="submit" className="mr-4" value="로그인" />
                    <input id="sign_up" type="button" value="회원 가입" onClick={onClick}/>
                </div>
            </form>
        </div>
    );
};

export default Login;