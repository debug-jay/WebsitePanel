
import {useState} from "react";
import { Link } from "react-router-dom";

import axios from 'axios';
import { setCookie } from '../hooks/setCookie';
import { getCookie } from '../hooks/getCookie';

import { setAuth } from "../hooks/setAuth";
import { getAuth } from "../hooks/getAuth";

import { useNavigate } from "react-router-dom";

import { RefreshPage } from "../scripts/RefreshPage";

import loadingIcon from '../images/loadingIcon.svg';

export const SignInPage = () => {
    
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const user = [{username: `${username}`, password: `${password}`}];

    

    let navigate = useNavigate();

    const NavigatePage = () => {
        return navigate('/account');
    }


     const CheckAuth = async () => {
        const post_link = 'https://25ddwtqlsatsevbgbgqp54h3zy0bovbt.lambda-url.us-east-1.on.aws/api/checkAuth';
        //const buttonBackground = document.getElementById('signinbutton');
        try{
            setLoading(true);
            //buttonBackground.className = 'py-3 w-64 text-xl text-black bg-white border border-gray-900 rounded-2xl';
            console.log(`username: ${username}, password: ${password}, loading: ${loading}, logged In: ${getAuth()} `);
            await axios.post(post_link,{
                username: `${username}`,
                password: `${password}`
            })
            .then((res)=>{
                console.log("Response: " + res.data);
                if(`${res.data}` == "true")
                {
                    
                    NavigatePage();
                    setAuth('true');
                    // Set Cookies
                    setCookie('usrin', JSON.stringify(user));
                    console.log(`Cookies: ${getCookie('usrin')}`);      
                } else {
                    setAuth('false');
                }   
                setLoading(false);
                //buttonBackground.className = 'py-3 w-64 text-xl text-white hover:text-black hover:bg-white border bg-black hover:border-gray-900 rounded-2xl';
                if(getAuth() == 'true')
                {
                    RefreshPage();
                }
            })
            .catch(err=>{
                console.log(err);
                //setAuth('false');
                //setLoading(false);
                //buttonBackground.className = 'py-3 w-64 text-xl text-white hover:text-black hover:bg-white border bg-black hover:border-gray-900 rounded-2xl';
            })
        } catch(e){
            console.log(e);
        }
 }
    
    return(
        <div className=" h-screen -z-10 scale-90 md:scale-100">
        <div className="min-h-screen  flex justify-center items-center">
	<div className="py-12 px-12 bg-white rounded-2xl shadow-xl border border-gray-500">
		<div className=" justify-center">
			<h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome Admin!</h1>
			<p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer ">Sign In To Your Role as a Admin</p>
		</div>
		<div className="space-y-4"> 
            <input onChange={(e)=>SetUsername(e.target.value)} type="text" placeholder="Username" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
			<input onChange={(e)=>SetPassword(e.target.value)} type="password" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        </div>

		<div className="text-center mt-6">
				<button id="signinbutton" onClick={()=>CheckAuth()} className="py-3 w-64 text-xl text-white hover:text-black hover:bg-white border bg-black hover:border-gray-900 rounded-2xl">{loading ? <div className="flex justify-center"><img src={loadingIcon} width="30px" alt=""/></div> : "Sign In"}</button>
				<p className="mt-4 text-sm">Probelm Signing In? <span className="underline cursor-pointer"> <Link to="/contact">Contact Owner</Link></span>
				</p>
		</div>
        
		</div>

        
	</div>
    </div>
    );
    }
