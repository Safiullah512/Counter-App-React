import { useState } from "react";
function Button() {
  const [IsLogged, setIsLogged] = useState(true);
  const [Name, setName] = useState("");
  const [password, SetPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (Name === "") {
      alert("Please enter your name");
      return;
    } else if (password === "") {
      alert("Please enter your password");
      return;
    }

    alert("Form submitted");
    // console.log(Name);
    // console.log(password);
  }

  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="w-fit p-5 bg-sky-400 rounded drop-shadow-black border-2 border-gray-600 ">
        {/* <h1 className="text-2xl font-extrabold">
          {IsLogged ? "Please Login to Buy Products" : "Welcome Customer"}
        </h1>
        <button
          onClick={() => setIsLogged(!IsLogged)}
          className="p-4 m-5 bg-amber-500 text-xl rounded cursor-pointer border border-gray-500"
        >
          {IsLogged ? "Login" : "Logout"}
        </button> */}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-2"
        >
          <input
            type="text"
            value={Name}
            placeholder="Enter a name"
            onChange={(e) => setName(e.target.value)}
            className="p-3 border"
          />
          <input
            placeholder="Enter a Password"
            className="p-3 border"
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          ></input>

          <button type="submit" className="p-3 border-2 bg-amber-500 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Button;
