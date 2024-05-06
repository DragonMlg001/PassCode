import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      <div className="mx-auto max-w-4xl">
        <h1 className="text-white text-center p-1 font-extrabold text-4xl">
         <span className="text-green-600">Pass</span>
         <span className="text-white">Code</span>
        </h1>

        <p className="text-white text-center p-1 font-bold text-2xl hover:text-green-500 cursor-none">
          Keeping Your Mind At Ease
        </p>

        <div className="text-white flex flex-col p-4">
          <input className=" my-borders" type="text" />

          <div className="flex py-3">
            <input className=" my-borders" type="text" />

            <input className="mx-5 my-borders " type="text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
