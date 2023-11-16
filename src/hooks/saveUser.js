import UseAxios from "./UseAxios";

export const saveUser = async (user) => {
    const axios = UseAxios();
    const userData = { email: user.email, role: "guest", stats: "varified" }
    const { data } = await axios.put(`/users/${user.email}`)
    return data
}