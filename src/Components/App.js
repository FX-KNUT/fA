import { createStore } from "redux";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import reducer from "./Reducer";
import "./tailwind.css"

export const store = createStore(reducer);

function App() {
  return (
    <div id="background" className="">
      <section id="wrap" className="">
        <Header /> 
        <Container />
        <Footer /> 
      </section>
    </div>
  );
}

export default App;