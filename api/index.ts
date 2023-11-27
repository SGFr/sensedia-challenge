export const getUsersByPage = (page: number = 1) => {
    return fetch(`https://reqres.in/api/users?page=${page}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}
