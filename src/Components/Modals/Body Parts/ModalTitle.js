import { useState } from "react";
import { store } from "../../App";

const ModalTitle = () => {

    const [title, setTitle] = useState(undefined);

    const listener = () => {
        const { modal_mode } = store.getState();
        setTitle(modal_mode);
    };

    store.subscribe(listener);

    return (
        <div id="modal_title" className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{title}</p>
            <div className="modal-close cursor-pointer z-50">
                <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
            </div>
        </div>
    );
};

export default ModalTitle;