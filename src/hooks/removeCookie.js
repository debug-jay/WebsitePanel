
import Cookies from "js-cookie";

export const removeCookie = (cookiename) => {
    return Cookies.remove(cookiename);
}