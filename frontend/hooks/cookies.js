import Cookies from 'js-cookie';

const setCookie = (key, value) => {
    const token = value?.data?.data?.token
    Cookies.set(key, token);
};

const deleteCookie = (cookie) => {
    Cookies.remove(cookie);
};

const getCookie = (name) => {
    return Cookies.get(name)
}

export { setCookie, deleteCookie, getCookie };