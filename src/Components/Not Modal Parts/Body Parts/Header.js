// h-header => height: 8%;

import { store } from "../../App";
import { SIGN_IN } from "../../Reducer/Reducer";

const Header = () => {

    const onClick = () => {
        store.dispatch({type: SIGN_IN});
    };

    return (
        <header id="header_container pointer-events-none " className="h-header" >
            <div id="header" className="">
                <span className="modal-open" onClick={onClick}>Header</span>
            </div>
        </header>
    );
};

export default Header;  