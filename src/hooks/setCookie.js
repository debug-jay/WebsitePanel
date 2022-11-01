import Cookies from "js-cookie";

export const setCookie = (cookiename, usrin) => {
    return Cookies.set(cookiename, usrin, {
        expires: 1, // 1 Day
        secure: true,
        sameSite: 'strict',
        path:'/'
    })
}