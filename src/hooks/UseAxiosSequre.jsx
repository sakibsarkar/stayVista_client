import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
})



const UseAxiosSequre = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    instance.interceptors.response.use((res) => {
        return res
    },
        async (err) => {
            const status = err.response.status
            if (status === 401 || status === 403) {
                await logOut()
                await axios.get("http://localhost:5000/api/logout", { withCredentials: true })
                navigate("/login")

            }
            return Promise.reject(err)
        })
    return instance
};

export default UseAxiosSequre;