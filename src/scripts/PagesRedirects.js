import { useNavigate } from "react-router-dom"

export const SignInRedirect = () => {
    let navigate = useNavigate();

    return navigate('/signin');
}