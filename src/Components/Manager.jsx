import React, { useRef, useState } from "react";

const Manager = () => {
  const ref = useRef();

  const [form , setForm] = useState({site: "" , username: "" , password: ""});

  const showPassword = ()=> {
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

  const savePassword = ()=>{
console.log(form);

  };

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

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
          <input className=" my-borders" type="text" placeholder="www.website-link-here.com" name="site"
          value={form.site} onChange={handleChange}
          />
          <div className="flex py-2 gap-56">
            <h1 className="px-3 text-2xl">Username</h1>
            <h1 className="px-3 text-2xl">Password</h1>
          </div>
          <div className="flex py-3">
            {/* UserName Data */}
            <input className=" my-borders" type="text" placeholder="Username" name="username"
            value={form.username} onChange={handleChange}
            />
            {/* PassWord Data */}
            <input className="mx-5 my-borders " type="text" placeholder="Password" name="password"
            value={form.password} onChange={handleChange}
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
      </div>
    </>
  );
};

export default Manager;
