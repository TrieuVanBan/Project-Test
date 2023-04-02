export const PHONE_PREFIX = '+84';

export const PHONE_REGEX = /^0+[3,5,7,8,9]{1}[0-9]{1}[1-9]{1}[0-9]{6}$/;
export const NUMBER_REGEX = /^[0-9]*$/;
export const EMAIL_REGEX = /^[\w+][\w\.\-]+@[\w\-]+(\.\w{2,10})+$/;
export const PASSWORD_REGEX = /^\w{6,20}$/;


function isStringEmpty(string: string) {
    return !string || string === 'null' || String.prototype.trim.call(string) === '';
}

function isEmptyValue(value: string) {
    return typeof value === 'undefined' || value === null || value.toString().length === 0;
}

function isValidPhone(phone: string) {
    if (phone) {
        return PHONE_REGEX.test(phone);
    }
    return false;
}

function isValidEmail(orgEmail: string) {
    if (orgEmail) {
        return EMAIL_REGEX.test(orgEmail);
    }
    return false;
}

function isValidPassword(orgPass: string) {
    if (orgPass) {
        return orgPass.length >= 6 && orgPass.length <= 20;
    }
    return false;
}

export default {
    isStringEmpty,
    isEmptyValue,
    isValidPhone,
    isValidPassword,
    isValidEmail,
};