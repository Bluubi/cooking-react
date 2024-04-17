import style from './index.module.css';
export const CardElement = ({ text, user }: { text: string, user: JSX.Element }) => {
    return (<div className={`p-6 w-1/3 shadow-md ${style.animationElevate} cursor-default`}>
                <p>{ text } </p>
                { user }
            </div>)
}
