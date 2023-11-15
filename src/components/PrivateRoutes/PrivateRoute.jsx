import DataLoading from "../DataLoading/DataLoading";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const PrivateRoute = ({ childrean }) => {

    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <DataLoading></DataLoading>
    }

    if (!user) {
        return <Navigate state={location.pathname} replace to={"/login"}></Navigate>
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoute;