


export const getAuth = () => {
    return sessionStorage.getItem("authenticated") || false;
}