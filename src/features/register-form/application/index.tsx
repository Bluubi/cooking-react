import {FormEvent, useRef} from "react";
import {setCookie} from "../../../utils/cookies/set.ts";
import {useNavigate} from "react-router-dom";

export const RegisterForm = () => {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault();

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const cookie = {
            username,
            password
        }
        if(password && username){
            setCookie('login', 7, cookie);
            navigate('/index');
        }
    }

    return (
        <form className={'p-3.5 bg-white rounded-sm flex flex-wrap justify-center'} onSubmit={(event) => handleSubmit(event)}>
            <div className={'w-full'}>
                <label> Username </label>
                <input ref={usernameRef} className={'w-full mt-3 p-2 border-4 rounded-sm'} type={'text'} name={'username'}></input>
            </div>

            <div className={'w-full'}>
                <label> Password </label>
                <input ref={passwordRef} className={'w-full mt-3 p-2 border-4 rounded-sm'} type={'text'} name={'password'}></input>
            </div>

            <button className={'bg-emerald-600 p-3.5 mt-3 text-white rounded-md'}> Registrarse</button>
        </form>
    )
}
