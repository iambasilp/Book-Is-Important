import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleIncreament() {
    setCount((state) => {
      return state + 1;
    });
  }
  function handleDecreament() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }
  function handleMultiple(){
    setCount((state)=>{
        return state*2
    })
  }
  function handleDivision(){
    setCount((state)=>{
        return state/2
    })
  }
  return (
    <div className="counter min-h-screen bg-base-200 ">
      <div className="counter-content text-center flex justify-center align-middle pt-20">
        <div className="max-w-md">
          <h1 className="text-5xl mb-10">I can check your Patience</h1>
          <p className="">
            Do you think you have what it takes to stay calm under pressure?
            Test your patience with our challenging scenarios designed to push
            your limits. Whether it's waiting in line, dealing with difficult
            people, or managing unexpected delays, this experience will reveal
            just how composed you can remain when faced with life's little
            frustrations.
          </p>
          <div className="flex justify-center gap-2 mt-10">
          <button className="btn bg-green-800" onClick={handleMultiple}>
              Multiples
            </button>
            <button className="btn bg-green-800" onClick={handleDivision}>
              Division
            </button>
            <button className="btn btn-primary" onClick={handleIncreament}>
              Increament
            </button>
         
          </div>
          <h1 className="py-6">{count}</h1>
          <div className="flex justify-center gap-10">
            <button className="btn btn-primary" onClick={handleDecreament}>
              Decreament
            </button>
            <button className="btn bg-red-800" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
