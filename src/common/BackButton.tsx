import React from "react";
import { useHistory } from "react-router-dom";

export default function BackButton({ children }) {
  let history = useHistory();

  return (
    <button
      type="button"
      className="text-black font-bold py-2 px-4 rounded border border-black"
      onClick={history.goBack}
    >
      {children}
    </button>
  );
}
