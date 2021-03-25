const InfoValidator = (email, password) => {

    const error_shooter = document.querySelector("#error_shooter");
    const error_message = document.querySelector("#error_message");

    if(!email.includes("@") || !email.includes(".")) {
        error_message.innerHTML = "이메일 형식이 아닙니다.";
        error_shooter.classList.remove("invisible");
        return false;
    } else if(password.length < 8) {
        error_message.innerHTML = "비밀번호가 너무 짧습니다. 8자 이상으로 지정하세요.";
        error_shooter.classList.remove("invisible");
        return false;
    }
};

export default InfoValidator;