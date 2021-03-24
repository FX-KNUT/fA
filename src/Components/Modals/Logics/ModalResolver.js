import { SETTING } from "../../ConstantStorage";
import { SIGN_IN } from "../../Reducer/Reducer";
import Setting from "../Contents/Setting.js";
import Login from "../Contents/Login.js";
import { useState } from "react";
import { store } from "../../App";

const ModalResovler = () => {

    const [body, setBody] = useState(undefined);

    const listener = () => {
        const { modal_mode } = store.getState();
        setBody(modal_mode);
    };

    store.subscribe(listener);

    switch(body) {
        case SETTING:
            return (
                <Setting />
            );
        case SIGN_IN:
            return (
                <Login />
            );
        case undefined:
            return (
                <div id="modal_body_undefined">
                    
                </div>
            );

        default:
            return (
                <div id="modal_body_undefined">
                    if you see this, please visit the manager of this application~
                </div>
            );

    }
};

export default ModalResovler;