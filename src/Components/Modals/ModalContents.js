import ModalFooter from "./Body Parts/ModalFooter"
import ModalTitle from "./Body Parts/ModalTitle";
import ModalResolver from "./Logics/ModalResolver";

const ModalContents = () => {

    return (
      <div id="modal_contents_container" className="modal-content py-4 text-left px-6">
        <ModalTitle />
        <ModalResolver />
        <ModalFooter />
      </div>
    );
};

export default ModalContents;