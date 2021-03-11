import { createStore } from "redux";
import reducer from "./Reducer";
import "../tailwind.css"
import { useEffect } from "react";
import Container from "./Container";
import SelectBar from "./SelectBar";
// import {loadFunctionContainer} from "./Waiting";
// import KNUT from "../Res/Images/KNUT.jfif"

export const store = createStore(reducer);

function App() {

  // const [init, setInit] = useState(true);
  // const getInfo = store.getState();

  useEffect(() => {

    const html = document.querySelector("html");
    html.classList.add("removescroll"); // 스크롤바를 없애서 옆에 div가 숨어있는걸 모르게. 웹으로 동작시 방향키 오른쪽 클릭하면 보임
    // loadFunctionContainer();

    return () => {};
  }, []);

  return (
    <div id="background" className="min-h-screen bg-gradient-to-b from-yellow-50 via-red-100 to-green-200">
      <section id="wrap" className="">
          <Container />
          <SelectBar />
      </section>
    </div>
  );
}

export default App;