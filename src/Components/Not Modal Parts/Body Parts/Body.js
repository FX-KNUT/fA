import { useState } from "react";

const Body = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString('ko-KR'));

    setInterval(() => {
        setTime(new Date().toLocaleTimeString('ko-KR'));
    }, 1000);

    return (
        <div id="realbody" className="h-body w-full text-black flex items-center justify-center text-2xl">
            <pre>
                <div id="welcome_text" className="">진형이 똥구멍</div>
                <div id="welcome_clock" className=""> {time}</div>                
            </pre>
        </div>
    );
};

export default Body;