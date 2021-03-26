import { EMAIL, PASSWORD } from "../../ConstantStorage";

const LocalStorageChecker = () => {

    const init_email = localStorage.getItem(EMAIL) ?? '',
        init_password = localStorage.getItem(PASSWORD) ?? '',
        init_isEmailChecked = localStorage.getItem("isEmailChecked") ?? false,
        init_isInfoChecked = localStorage.getItem("isInfoChecked") ?? false;

    return [init_email, init_password, init_isEmailChecked, init_isInfoChecked];
    
};

export default LocalStorageChecker;