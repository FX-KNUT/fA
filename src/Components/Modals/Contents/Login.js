import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState(''),
          [password, setPassword] = useState('');

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

    return (
        <div name="submitForm" id="modal_contents_login" className="" onSubmit={onSubmit}>
            <form name="modal_contents_form" className="">
                <div id="emailDiv" className="mt-12 my-4 border-8 border-white">
                    <input id="email" name="email" type="text" placeholder=" Email" value={email} onChange={onChange} className="text-lg" size="32" required />
                </div>
                <div id="passwordDiv" className="my-4 border-8 border-white">
                    <input id="password" name="password" type="password" placeholder=" Password" value={password} onChange={onChange} className="text-lg" size="32" required />
                </div>
            </form>
        </div>
    );
};

export default Login;