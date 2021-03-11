import { useState } from "react";

const Body = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString('ko-KR'));

    setInterval(() => {
        setTime(new Date().toLocaleTimeString('ko-KR'));
    }, 1000);

    return (
        <div id="realbody" className="h-body text-black w-full h-full flex items-center justify-center text-6xl">
            <pre>
                <div id="welcome_text" className="">Hello, Bitches?</div>
                <div id="welcome_clock" className=""> {time}</div>                
            </pre>
        </div>
    );
};

export default Body;