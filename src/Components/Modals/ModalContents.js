import ModalBody from "./Body Parts/ModalBody"
import ModalFooter from "./Body Parts/ModalFooter"
import ModalTitle from "./Body Parts/ModalTitle"

const ModalContents = () => {

    return (
      <div id="modal_contents_container" className="modal-content py-4 text-left px-6">
        <ModalTitle />
        <ModalBody />
        <ModalFooter />
      </div>
    );
};

export default ModalContents;