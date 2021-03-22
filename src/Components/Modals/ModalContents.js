import ModalBody from "./Body Parts/ModalBody"
import ModalFooter from "./Body Parts/ModalFooter"
import ModalTitle from "./Body Parts/ModalTitle"
// import ModalResovler from "./Logics/ModalResolver";
import {connect} from "react-redux";

const ModalContents = (state) => {
  
    const { modal } = state;
    console.log(modal);

    return (
      <div id="modal_contents_container" className="modal-content py-4 text-left px-6">
        <ModalTitle modal={modal}/>
        <ModalBody modal={modal} />
        <ModalFooter />
      </div>
    );
};

const mapStateToProps = state => ({modal: state.modal_mode});

export default connect(mapStateToProps)(ModalContents);