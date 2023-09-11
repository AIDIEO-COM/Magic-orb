import "./isLoading.css";

const IsLoading = () => {
  return (
    <div className="w-full h-screen lg:h-full  flex justify-center items-center">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default IsLoading;
