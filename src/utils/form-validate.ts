import Languages from '../commons/langueges'
import Validate from './validate';

const validatePhone = (username: string) => {
    const reg = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return reg.test(username);
};

const validateEmail = (email: string) => {
    return email.match(
        /^(([a-zA-Z-\-0-9- ]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Name
function userNameValidateSignUp(userName: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(userName)) {
        errMsg = Languages.errorMsg.userNameRequired;
    } else if (userName.length < 8) {
        errMsg = Languages.errorMsg.userNameLength;
    }
    return errMsg;
}

// Email
function emailValidate(email: string) {
    let errMsg = '';
    if (email === '' || email === undefined) {
        errMsg = Languages.errorMsg.emailNull;
    }
    else if (!validateEmail(email)) {
        errMsg = Languages.errorMsg.emailRegex;
    }
    return errMsg;
}

// Phone
function passConFirmPhone(phone: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(phone)) {
        errMsg = Languages.errorMsg.userPhoneEmpty;
    } else if (!validatePhone(phone)) {
        errMsg = Languages.errorMsg.phoneRegex;
    } else if (phone.length < 10 || phone.length > 10) {
        errMsg = Languages.errorMsg.phoneCount;
    }
    return errMsg;
}

// Password
function passValidate(pwd: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(pwd)) {
        errMsg = Languages.errorMsg.userPasswordNull;
    } else if (pwd.length < 8) {
        errMsg = Languages.errorMsg.passwordCheck;
    }
    return errMsg;
}

// RePassword
function passConFirmValidate(pwd: string, conFirmPwd: string) {
    let errMsg = '';
    if (Validate.isStringEmpty(conFirmPwd)) {
        errMsg = Languages.errorMsg.userPasswordNull;
    } else if (pwd !== conFirmPwd) {
        errMsg = Languages.errorMsg.conFirmPwd;
    }
    return errMsg;
}

export default {
    passValidate,
    passConFirmPhone,
    userNameValidateSignUp,
    passConFirmValidate,
    emailValidate
};