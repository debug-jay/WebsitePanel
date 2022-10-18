import React, {PureComponent} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export class SignInPage extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
    return(
        <div className=" h-screen -z-10">
        <div class="min-h-screen  flex justify-center items-center">
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl border border-gray-500">
		<div className=" justify-center">
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Welcome Admin!</h1>
			<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer ">Sign In To Your Role as a Admin</p>
		</div>
		<div class="space-y-4"> 
            <input type="text" placeholder="Username" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"/>
			<input type="password" placeholder="Password" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
        </div>

		<div class="text-center mt-6">
				<button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">Sign In</button>
				<p class="mt-4 text-sm">Probelm Signing In? <span class="underline cursor-pointer"> <Link to="/signup">Contact Owner</Link></span>
				</p>
		</div>
        
		</div>

        
	</div>
    </div>
    );
    }
}