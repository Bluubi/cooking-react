import styles from './app.module.css'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function App() {

    const { t } = useTranslation();

  return (
      <div className={`${styles.backgroundImage} flex items-center`}>
        <Link role={"link"} className={`text-slate-50 text-6xl md:text-9xl col-start-2 col-span-10 font-bold ${styles.titleText} cursor-pointer hover:underline`} to={'home'}> { t('index.welcome')} </Link>
      </div>
  )
}

export default App
