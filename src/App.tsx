import './App.css'
import {Trans, useTranslation} from "react-i18next";
import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import bg3 from './assets/bg3.jpg';
import {useEffect, useState} from "react";
import {GoogleLogin} from "@react-oauth/google";

function App() {

    const backgroundImages = [bg1, bg2, bg3];
    const [randomImage, setImage ] = useState<number>(0);

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 3);
        setImage(randomNumber);
    }, []);

    const {t} = useTranslation();

  return (
    <h1>
        <section className={'h-screen min-w-[50vw] relative overflow-hidden flex'} >
           <div className={'relative p-96' }>
                <img src={backgroundImages[randomImage]} className={'absolute left-0 top-0'} alt={t('Portrait')} loading={'eager'}/>
           </div>
            <div className={'flex flex-wrap justify-center items-center w-lvw'}>
                <h1 className={'text-6xl text-center'}> <Trans i18nKey='home.welcomeToCooking' /></h1>
                <div className={'flex flex-wrap gap-x-2 justify-center'}>
                    <a className={'text-lime-50 text-center hover:cursor-pointer p-2 bg-lime-600 rounded-md'}> { t('home.guest')} </a>
                    <GoogleLogin onSuccess={()=> { console.log('logged!')}} onError={() => { console.log('error!')}} />
                </div>
            </div>
        </section>
    </h1>
  )
}

export default App
