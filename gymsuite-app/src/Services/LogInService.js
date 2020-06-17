import { API } from './APICallBase';

export async function UserSighIn(username,password){
    const endpoint="api/auth/signin";
    let api = await API();
    console.log(endpoint)
    return api.post(endpoint, {
        username: username,
        password: password
    });

}