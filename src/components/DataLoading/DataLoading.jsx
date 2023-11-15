import "./DataLoading.css";
import { LineWave } from "react-loader-spinner";

const DataLoading = () => {
    return (
        <div className="loaderContainer">
            <LineWave
                height="300"
                width="300"
                color="#ff2b4f"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>
    );
};

export default DataLoading;

