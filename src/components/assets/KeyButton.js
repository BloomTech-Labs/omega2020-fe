import React, { useState } from "react";
import { GridContext } from "../../store/contexts/GridContext";

function Keys(props) {
  // console.log(props.change, 'onClick props')

  return (
    <h1
      value={props.board}
      onClick={() => {
        props.change(props.board);
      }}
    >
      {props.board}
    </h1>
  );
}

export default Keys;
