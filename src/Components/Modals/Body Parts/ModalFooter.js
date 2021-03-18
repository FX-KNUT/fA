const ModalFooter = () => {

    return (
        <div id="modal_footer" className="flex justify-end pt-2">
          <button className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">취소</button>
          <button className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400">적용</button>
        </div>
    );
};

export default ModalFooter;