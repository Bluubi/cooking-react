export const setCookie = <T>(name: string, day: number, value: T) => {
    const date = new Date();
    date.setTime(date.getTime() + (day*24*60*60*1000));
    const expires = "; expires="+date.toUTCString();
    document.cookie = name+'='+JSON.stringify(value)+expires+"; path=/";
}
