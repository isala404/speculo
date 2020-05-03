import {useLayoutEffect, useState} from "react"

//function with the useLayoutEffect hook to get the current width of the context window
//constant with the useState hook to access state
export const GetWindowSize =() => {
    const [size, setSize] = useState([0, 0]);
  
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }