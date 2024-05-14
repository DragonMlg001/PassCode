import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();

  const [form, setForm] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");

    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("SHow password clicked");
    // changing icons using ref
    // if(ref.current.src.includes("icons/eye2.png")){
    //   ref.current.src="icons/eye1.png";
    // }else{
    //   ref.current.src="icons/eye2.png";
    // }

    // using  ternary operator
    ref.current.src.includes("icons/eye2.png")
      ? (ref.current.src = "icons/eye1.png")
      : (ref.current.src = "icons/eye2.png");
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#2f3247] bg-[radial-gradient(#ffffff_1px,#000000_1px)] bg-[size:60px_60px]"></div>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-white text-center p-1 font-extrabold text-4xl">
          <span className="text-green-600">Pass</span>
          <span className="text-white">Code</span>
        </h1>

        <p className="text-white text-center p-1 font-bold text-2xl hover:text-green-500 cursor-none">
          Keeping Your{" "}
          <strong className="text-green-600 hover:text-opacity-90">Mind</strong>{" "}
          At Ease
        </p>
        <div className="text-white flex flex-col p-4">
          <h1 className="p-3 text-2xl">URL / Website Link</h1>
          {/* Website Data */}
          <input
            className=" my-borders"
            type="text"
            placeholder="www.website-link-here.com"
            name="site"
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex py-2 gap-56">
            <h1 className="px-3 text-2xl">Username</h1>
            <h1 className="px-3 text-2xl">Password</h1>
          </div>
          <div className="flex py-3">
            {/* UserName Data */}
            <input
              className=" my-borders"
              type="text"
              placeholder="Username"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            {/* PassWord Data */}
            <input
              className="mx-5 my-borders "
              type="text"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            {/* Show Button */}
            <button
              type="button"
              className="text-2xl flex flex-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-fit p-2 justify-center"
              onClick={showPassword}
            >
              <img src="icons/eye1.png" className="w-20" ref={ref} />
            </button>
            {/* Add / Save  button */}
            <button
              type="button"
              className="text-2xl flex flex-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-fit p-2 mx-2 justify-center"
              onClick={savePassword}
            >
              <span className="flex justify-center">
                <lord-icon
                  src="https://cdn.lordicon.com/jgnvfzqg.json"
                  trigger="loop"
                  colors="primary:green,secondary:green"
                ></lord-icon>
                Add
              </span>
            </button>
          </div>
        </div>
        <div className="passwords">
          <h2 className="text-white text-center p-6 font-extrabold text-4xl hover:text-green-500 cursor-none"
          >Your <span className="text-green-600">Saved</span> Passwords</h2>
          {/* Table starts here*/}
          {passwordArray.length ===0 && <div>
            <h2 className="text-2xl text-center border-2 p-2 border-white rounded text-white font-extrabold hover:bg-green-400 hover:text-black cursor-help "
            >There are no websites or Passwords Saved Currently</h2>
            </div>}
            {passwordArray.length != 0 && 
          <table className="table-auto w-full bg-green-200 font-extrabold border border-white rounded-lg overflow-hidden">
            <thead className="bg-green-400">
              <tr className="text-black text-2xl">
                <th className="border-4 border-black py-2">Site</th>
                <th className="border-4 border-black py-2">Username</th>
                <th className="border-4 border-black py-2">Password</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item)=>{
                return(
                <tr key={uuidv4()}>
                <td className="text-center border-2 border-gray-700 w-32 p-3 "><a href={item.site} target="_blank" >{item.site}</a></td>
                <td className="text-center border-2 border-gray-700 w-32 p-3 ">{item.username}</td>
                <td className="text-center border-2 border-gray-700 w-32 p-3 ">{item.password}</td>
              </tr>
            )})}
            </tbody>
          </table>}
        </div>
      </div>
    </>
  );
};

export default Manager;
