import Defaultloader from "./asset/lodingapi (1).gif";
import Exchangeloading from "./asset/loadingexchange.gif";
export const DefaultLoading = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center  my-44 	">
      <img className="w-28" src={Defaultloader} alt="loader" />
      <h1 className="text-2xl text-green-800 font-medium	">Loading...</h1>
    </div>
  );
};

export const ExchangeDefault = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative ">
      <img className="inset-2/2 absolute" src={Exchangeloading} alt="loader" />
    </div>
  );
};
