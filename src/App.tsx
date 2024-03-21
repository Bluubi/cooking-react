import './App.css'
import {Trans, useTranslation} from "react-i18next";
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import {GoogleLogin} from "@react-oauth/google";
import {Link} from "react-router-dom";
import {setCookie} from "./utils/cookies/set.ts";
import {RegisterForm} from "./features/register-form/application";
import {ModalComponent} from "./components/modal";
import {useState} from "react";

function App() {

    const backgroundImages = [bg1, bg2, bg3];
    const randomNumber = Math.floor(Math.random() * 3);


    const {t} = useTranslation();

    const [ open, setOpen ] = useState<boolean>(false);
    const [ alreadyHaveAnAccount, setAlreadyHaveAnAccount ] = useState<boolean>(false);

  return (
    <h1>
        <section className={'h-screen min-w-[50vw] relative overflow-hidden flex'} >
           <div className={'relative p-96' }>
                <img src={backgroundImages[randomNumber]} className={'absolute left-0 top-0'} alt={t('Portrait')} loading={'eager'}/>
           </div>
            <div className={'flex flex-wrap justify-center items-center w-lvw'}>
                <h1 className={'text-6xl text-center'}> <Trans i18nKey='home.welcomeToCooking' /></h1>
                <div className={'flex flex-wrap gap-x-2 justify-center'}>
                    <Link className={'text-emerald-50 text-center hover:cursor-pointer p-2 bg-emerald-600 rounded-md'}
                          to={'index'}> <Trans i18nKey={'home.guest'}/> </Link>
                    <GoogleLogin onSuccess={(value) => {
                        console.log(value);
                        setCookie('auth', 7, value)
                    }} onError={() => {
                        console.log('error!')
                    }}/>
                    <button className={'mt-3'}
                            onClick={() => setAlreadyHaveAnAccount(!alreadyHaveAnAccount)}> {alreadyHaveAnAccount ? '¿No tienes cuenta?' : 'Haz click aquí para loguearte'}</button>

                    {
                        !alreadyHaveAnAccount ?
                            <button
                                className={'mt-8 bg-emerald-600 p-3.5 rounded-md text-white text-center hover:cursor-pointer hover:bg-emerald-950'}
                                onClick={() => setOpen(!open)}>
                                <Trans i18nKey={'home.loginAtCookingReact'}/>
                            </button>
                            :
                            <button
                                className={'w-full mt-8 bg-emerald-600 p-3.5 rounded-md text-white text-center hover:cursor-pointer hover:bg-emerald-950'}
                                onClick={() => setOpen(!open)}>
                                <Trans i18nKey={'home.registerInCookingReact'}/>
                            </button>
                    }
                </div>
            </div>


            <ModalComponent isOpen={open} setOpen={setOpen}>
                <RegisterForm/>
            </ModalComponent>

        </section>
    </h1>
  )
}

export default App
