import { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center text-center h-screen">
      <div className="w-fit m-5 p-3 bg-gray-300 rounded ">
        <h1 className=" text-2xl font-bold underline mb-3">Counter App</h1>
        <div className="flex">
          <p className=" w-fit p-5 rounded bg-sky-400  m-5">{count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="m-5 p-2 bg-amber-500 rounded hover:bg-amber-800 hover:text-white cursor-pointer"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="m-5 p-3 bg-amber-500 rounded hover:bg-amber-800 hover:text-white cursor-pointer"
          >
            -
          </button>
          <button
            onClick={() => setCount(0)}
            className="m-5 p-3 bg-amber-500 rounded hover:bg-amber-800 hover:text-white cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default Button;
