import {useCallback, useEffect, useState} from "react";
import {User} from "../../features/user/user.ts";

export const CardUser = () => {

    const [ user, setUser ] = useState<User>()

    useEffect(() => {

        const fetchUser = async () => {
            const responseUser = await fetch('https://randomuser.me/api/');
            const userJson = await responseUser.json();
            setUser(userJson);
        }

        fetchUser();


    }, []);

    return( <p> Name: { user?.name?.first } { user?.name?.last } </p>)
}
