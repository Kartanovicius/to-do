import React from "react";

export default function ErrAlert({ error, errMessage }) {
  
  return (
    <div class="alert alert-danger" role="alert" hidden={error === false ? true : false}>
      {errMessage}
    </div>
  );
}
