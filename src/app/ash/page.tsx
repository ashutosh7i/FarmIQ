import React from "react";

export default function Ash() {
  return (
    <>
      <h1>learning layouts</h1>
      <h1>equal elements</h1>
      <h2>two elements</h2>
      <div className="grid gap-4 m-4 sm:grid-cols-2 sm:grid-cols-2">
        <div className="bg-red-400 rounded min-h-[50px] shadow-xl">1</div>
        <div className="bg-green-400 rounded min-h-[50px] shadow-xl">2</div>
      </div>
      <h2>three elements</h2>
      <div className="grid gap-4 m-4 sm:grid-cols-3 ">
        <div className="bg-red-400 rounded min-h-[50px] shadow-xl">1</div>
        <div className="bg-green-400 rounded min-h-[50px] shadow-xl">2</div>
        <div className="bg-yellow-400 rounded min-h-[50px] shadow-xl">2</div>
      </div>

      <br />
      <h1>non elements</h1>
      <h2>two elements</h2>
      <div className="grid gap-4 m-4 sm:grid-cols-12">
        <div className="bg-red-400 rounded min-h-[50px] shadow-xl sm:col-span-4 ">
          1
        </div>
        <div className="bg-green-400 rounded min-h-[50px] shadow-xl sm:col-span-8">
          2
        </div>
      </div>
      <h2>three elements</h2>
      <div className="grid gap-4 m-4 sm:grid-cols-12 ">
        <div className="bg-red-400 rounded min-h-[50px] shadow-xl sm:col-span-3 hidden sm:block ">
          1
        </div>
        <div className="bg-green-400 rounded min-h-[50px] shadow-xl sm:col-span-5">
          2
        </div>
        <div className="bg-yellow-400 rounded min-h-[50px] shadow-xl sm:col-span-4 hidden sm:block ">
          2
        </div>
      </div>
    </>
  );
}
