import { createStore } from "redux";
import reducer, { DESTROY } from "./Reducer";
import "../tailwind.css"
import { useEffect } from "react";
import Container from "./Container";
import SelectBar from "./SelectBar";
import FunctionContainer from "./FunctionContainer.js";
import Calculator from "./Functions/Calculator";
import Calendar from "./Functions/Calendar";
// import {loadFunctionContainer} from "./Waiting";
// import KNUT from "../Res/Images/KNUT.jfif"

// starting command = npm run akrom

export let store = createStore(reducer);

function App() {

  // const [init, setInit] = useState(true);
  // const getInfo = store.getState();

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.add("removescroll"); // 스크롤바를 없애서 옆에 div가 숨어있는걸 모르게. 웹으로 동작시 방향키 오른쪽 클릭하면 보임

    return () => {store.dispatch({type: DESTROY})};
  }, []);

  return (
    <div id="background" className="min-h-screen inset-0 bg-yellow-100 bg-opacity-70">
      <section id="wrap" className="absolute w-screen h-screen">
        <Container />
        <SelectBar />
      </section>
      <section id="functions" className="absolute top-0 -right-1/4
                                          h-full functionbarsize
                                          bg-pink-100 bg-opacity-80
                                          transition-all ease-in-out duration-500">
        <FunctionContainer />
      </section>
      {/* <section id="functions_lurker" className="absolute top-0
                                                h-full w-full
                                                transition-all ease-in-out duration-700"> */}
      <Calculator />
      <Calendar />
    </div>
  );
}

export default App;