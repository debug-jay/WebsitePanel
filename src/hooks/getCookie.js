
import Cookies from "js-cookie";

export const getCookie = (cookiename) => {
    return Cookies.get(cookiename);
}