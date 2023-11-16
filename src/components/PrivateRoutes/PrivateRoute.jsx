import DataLoading from "../DataLoading/DataLoading";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <DataLoading></DataLoading>
    }

    if (!user) {
        return <Navigate state={location.pathname} replace to={"/login"}></Navigate>
    }
    return children
};

export default PrivateRoute;