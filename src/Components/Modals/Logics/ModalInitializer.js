import { store } from "../../App";
import { MODAL_CLOSE } from "../../Reducer/Reducer";
import ToggleModal from "./ToggleModal";

const ModalInitializer = () => {

    // x button on up right side of modal background
    const closemodal = document.querySelectorAll('.modal-close')
    for (let i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', () => {
        store.dispatch({type: MODAL_CLOSE});
        ToggleModal();
      });
    }

    // push esc button on keyboard to easily close the modal. need a conference to utilize this or not.
    // if we decide to use this function, we should add more things on it. for example: checking changes before closing
    document.onkeydown = e => {
        e = e || window.event;
        let isEscape = false;
        if ("key" in e) {
          isEscape = (e.key === "Escape" || e.key === "Esc")
        } else {
          isEscape = (e.keyCode === 27)
        }
        if (isEscape && document.body.classList.contains('modal-active')) {
          store.dispatch({type: MODAL_CLOSE});
          ToggleModal();
        }
    };

    // open modal
    const openmodal = document.querySelectorAll(".modal-open");
    for (let i = 0; i < openmodal.length; i++) {
        openmodal[i].addEventListener('click', e => {
          e.preventDefault();
          ToggleModal();          
        });
    };

};

export default ModalInitializer;