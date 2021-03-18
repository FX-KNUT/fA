import ModalContainer from "./ModalContainer"

const Modal = () => {
   
    return (
        <div className="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <ModalContainer />
        </div>
    );
};

export default Modal;