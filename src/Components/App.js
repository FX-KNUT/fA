import { createStore } from "redux";
import reducer, { DESTROY } from "./Reducer/Reducer.js";
import "../tailwind.css"
import { useEffect } from "react";
import Modal from "./Modals/Modal.js";
import BodyParts from "./Not Modal Parts/Body Parts/BodyParts.js";
import ModalInitializer from "./Modals/Logics/ModalInitializer.js";
// import {loadFunctionContainer} from "./Waiting";
// import KNUT from "../Res/Images/KNUT.jfif"

// starting command = npm run akrom

// bg-transparent border border-gray-500 hover:border-indigo-500 text-gray-500 hover:text-indigo-500 font-bold

export let store = createStore(reducer);

function App() {

  // const [init, setInit] = useState(true);
  // const getInfo = store.getState();

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add("removescroll"); // 스크롤바를 없애서 옆에 div가 숨어있는걸 모르게. 웹으로 동작시 방향키 오른쪽 클릭하면 보임
    html.style.overflow = "hidden !important";

    ModalInitializer();

    return () => {store.dispatch({type: DESTROY})};
  }, []);

  return (
    <>
      <BodyParts />
      <Modal />
    </>
  );
}

export default App;