import React from "react";
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BtnTooltip from "./BtnTooltip";

export default function ButtonClick() {
  const btn = () => {
    toast.warn("Ohhh man, you just not read instruction!!!", {
      position: "top-center",
    });
  };

  return (
    <>
      <Button
        color="warning"
        onClick={btn}
        className="m-3"
        outline
        id="BtnTooltip"
      >
        Please Do not click this is not a Button!!!
      </Button>
      <BtnTooltip />
      <ToastContainer />
    </>
  );
}
