import { Hearts } from "react-loader-spinner";

const Loader = () => {
    return (
        <Hearts 
        height="80"
        width="100"
        color="#f68943"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    )
}

export default Loader;