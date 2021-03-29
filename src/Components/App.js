import { createStore } from "redux";
import reducer, { DESTROY } from "./Reducer/Reducer.js";
import "../tailwind.css"
import { useEffect } from "react";
import ModalInitializer from "./Modals/Logics/ModalInitializer.js";
import AppRouter from "./AppRouter.js";

export let store = createStore(reducer);

function App() {
  // componentDidMount 필요. [ 서버와 연결을 위해서 ]

  const {isLoggedIn} = store.getState();

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add("removescroll"); // 스크롤바를 없애서 옆에 div가 숨어있는걸 모르게. 웹으로 동작시 방향키 오른쪽 클릭하면 보임
    html.style.overflow = "hidden !important";

    ModalInitializer();

    return () => {
      store.dispatch({type: DESTROY});
    };
  }, []);

  return (
    <AppRouter isLoggedIn={isLoggedIn} />
  );
}

export default App;