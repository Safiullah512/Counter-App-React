import { useState } from "react";
function Button() {
  const [IsLogged, setIsLogged] = useState(true);
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="w-fit p-5 bg-sky-400 rounded drop-shadow-black border-2 border-gray-600 flex flex-col items-center">
        <h1 className="text-2xl font-extrabold">
          {IsLogged ? "Please Login to Buy Products" : "Welcome Customer"}
        </h1>
        <button
          onClick={() => setIsLogged(!IsLogged)}
          className="p-4 m-5 bg-amber-500 text-xl rounded cursor-pointer border border-gray-500"
        >
          {IsLogged ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
}
export default Button;
