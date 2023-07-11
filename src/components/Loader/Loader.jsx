import { Hearts } from "react-loader-spinner";

const Loader = () => {
    return (
        <Hearts 
        height="80"
        width="100"
        color="#07bc0c"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    )
}

export default Loader;