// import ModalBody from "./Body Parts/ModalBody"
import ModalFooter from "./Body Parts/ModalFooter"
import ModalTitle from "./Body Parts/ModalTitle"
import ModalResovler from "./Logics/ModalResolver";

const ModalContents = () => {

    return (
      <div id="modal_contents_container" className="modal-content py-4 text-left px-6">
        <ModalTitle />
        <ModalResovler />
        <ModalFooter />
      </div>
    );
};

export default ModalContents;