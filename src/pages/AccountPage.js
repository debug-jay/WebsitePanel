import { useNavigate } from "react-router-dom";

import { removeAuth } from "../hooks/removeAuth";
import { RefreshPage } from "../scripts/RefreshPage";

export const AccountPage = () => {

    let navigate = useNavigate();

    const UserLogout = () => {
        removeAuth();
        navigate('/signin');
        RefreshPage();
    }

    return(
        <>
            <div className="">
            Account Page
            <button onClick={()=>UserLogout()} className='border p-2 m-5 bg-green-500 rounded-full'>Logout</button>
            </div>
        </>
    );
}