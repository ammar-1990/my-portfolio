
import BounceLoader from "react-spinners/BounceLoader";

const Loader = () => {


    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };  
  return (
    <div className="w-full flex items-center justify-center p-4 ">

<BounceLoader
        color={'rgb(109 40 217)'}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={1.5}
      />
    </div>
  )
}

export default Loader