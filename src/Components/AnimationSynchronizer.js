const AnimationSynchronizer = (state) => {

    // This component requires refactoring of its algorithm inside as it's horrible.

    const {selected, degree, func_arr} = state;
    const selectBtn = document.querySelector("#select_button_circle");
    const functions = document.querySelector("#functions");

    switch(degree) {
        case 3:
            selectBtn.classList.remove("selectbtn-twofunc");
            selectBtn.classList.add("selectbtn-two");
            functions.classList.remove("-right-1/4");
            functions.classList.add("right-0");
            func_arr[1].classList.remove("-right-1/4");
            func_arr[1].classList.remove("right-1/4");
            func_arr[1].classList.add("secondfunction");
            func_arr[0].classList.remove("right-0");
            func_arr[0].classList.add("firstfunction");
            break;
        case 2: 
            if (selected) {
                selectBtn.classList.remove("selectbtn-cilcked");
                selectBtn.classList.remove("selectbtn-two");
                selectBtn.classList.remove("selectbtn-onefunc");
                selectBtn.classList.add("selectbtn-one");
                functions.classList.remove("-right-1/4");
                functions.classList.add("right-0");
                func_arr[0].classList.remove("right-0");
                func_arr[0].classList.remove("secondfunction");
                func_arr[0].classList.remove("-right-1/4");
                func_arr[0].classList.add("firstfunction");
                console.log(func_arr[0]);    
                console.log(func_arr[0].classList);
            } else {
                selectBtn.classList.remove("selectbtn-two");
                selectBtn.classList.add("selectbtn-twofunc");
                functions.classList.remove("right-0");
                functions.classList.add("-right-1/4");
                func_arr[1].classList.remove("secondfunction");
                func_arr[1].classList.add("right-1/4");
                func_arr[0].classList.remove("firstfunction");
                func_arr[0].classList.add("right-0");
            }
            break;
        case 1:
            if (selected) {
                selectBtn.classList.remove("selectbtn-one");
                selectBtn.classList.add("selectbtn-clicked");
                functions.classList.remove("-right-1/4");
                functions.classList.add("right-0");
            } else {
                functions.classList.remove("right-0");
                functions.classList.add("-right-1/4");
                func_arr[0].classList.remove("firstfunction");
                func_arr[0].classList.add("right-0");
                selectBtn.classList.remove("selectbtn-one");
                selectBtn.classList.add("selectbtn-onefunc");
            }
            break;
        case 0:
            try {
                func_arr[0].classList.remove("secondfucntion");
                func_arr[0].classList.remove("firstfucntion");
                func_arr[0].classList.add("-right-1/4");
                func_arr[1].classList.remove("secondfucntion");
                func_arr[1].classList.remove("firstfucntion");
                func_arr[1].classList.add("-right-1/4");
            } catch {
            } finally {
                selectBtn.classList.remove("selectbtn-clicked");
                selectBtn.classList.remove("selectbtn-onefunc");
                selectBtn.classList.remove("selectbtn-twofunc");
                selectBtn.classList.remove("selectbtn-one");
                selectBtn.classList.remove("selectbtn-two");
                functions.classList.remove("right-0");
                functions.classList.add("-right-1/4");
            }

            break;
        default:
    }
}

export default AnimationSynchronizer;