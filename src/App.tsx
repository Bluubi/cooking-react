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
        <section className={'h-screen min-w-[50vw] relative overflow-hidden grid grid-cols-12'} >
           <div className={'relative col-span-12 md:col-span-6 invisible md:visible' }>
                <img src={backgroundImages[randomNumber]} className={'absolute left-0 top-0'} alt={t('Portrait')} loading={'eager'}/>
           </div>
            <div className={'col-span-12 md:col-span-6 p-3.5'}>
                <h1 className={'text-6xl col-span-12'}> <Trans i18nKey='home.welcomeToCooking' /></h1>
                <div className={'gap-x-2 p-3.5 justify-center grid grid-cols-12 gap-10 mt-8'}>

                    {
                        alreadyHaveAnAccount ?
                            <button
                                className={'md:col-span-12 h-fit col-span-6 bg-emerald-600 p-2 rounded-md text-white text-center hover:cursor-pointer hover:bg-emerald-950'}
                                onClick={() => setOpen(!open)}>
                                <Trans i18nKey={'home.loginAtCookingReact'}/>
                            </button>
                            :
                            <button
                                className={'md:col-span-12 h-fit col-span-6 bg-emerald-600 p-2 rounded-md text-white text-center hover:cursor-pointer hover:bg-emerald-950'}
                                onClick={() => setOpen(!open)}>
                                <Trans i18nKey={'home.registerInCookingReact'}/>
                            </button>
                    }
                    <div className={'md:col-span-12 col-span-6'}>
                        <GoogleLogin onSuccess={(value) => {
                            setCookie('auth', 7, value)
                        }} onError={() => {
                            console.log('error!')
                        }}/>
                    </div>
                    <button className={'col-span-12'}
                            onClick={() => setAlreadyHaveAnAccount(!alreadyHaveAnAccount)}> {alreadyHaveAnAccount ? '¿No tienes cuenta?' : 'Haz click aquí para loguearte'}</button>

                    <Link className={'col-span-12 text-emerald-50 text-center hover:cursor-pointer p-2 bg-emerald-600 rounded-md'}
                          to={'index'}> <Trans i18nKey={'home.guest'}/> </Link>
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
