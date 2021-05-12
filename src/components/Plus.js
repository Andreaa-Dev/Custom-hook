import React from "react";
import useFetch from "../hooks/useFetch";

function Plus() {
  const [data, error] = useFetch(); // [data, error];

  return (
    <div>
      <button>click me</button>
    </div>
  );
}

export default Plus;
