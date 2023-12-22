import { useEffect, useState } from "react";

export default function UseEffectHookComponent() {
  const [count, setCount] = useState(0);

  // useEffect with no dependencies (runs after every render) including initial render
  useEffect(() => {
    console.log("component initial mount "); //or state change! if[] is not added as 2nd param
    // Cleanup function (runs on component unmount)
    return () => {
      console.log("Cleanup function!");
    };
    // adding an empty array as second parameter is crucial otherwise useEffect will run on every state change of this component
  }, []);

//   useEffect(() => {
//     console.log("component initial mount or state change!");
//     // Cleanup function (runs on component unmount)
//     return ()=> {}; // empty cleanup
//     // adding an empty array as second parameter is crucial otherwise useEffect will run on every state change of this component
//   }, []);



  return (
    <div>
      <p>Count: {count}</p>
      <button
        className="bg-neutral-darkGrayishBlue p-12"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
