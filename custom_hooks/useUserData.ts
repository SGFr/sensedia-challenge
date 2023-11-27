import { useState } from "react";

const defaultUser = {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
}

const useUserData = () => {
    const [userLogged, setUserLogged] = useState(defaultUser);
    const [acrostic, setAcrostic] = useState(getLetters(userLogged.first_name + " " + userLogged.last_name));

    return {
        acrostic,
        userLogged,
        setUserLogged
    }
}

const getLetters = (userName: string) => {
    const firstSplit = userName.split(" ");
    const letters = (firstSplit[0].split(""))[0] + (firstSplit[1].split(""))[0]
    return letters;
}

export { useUserData };