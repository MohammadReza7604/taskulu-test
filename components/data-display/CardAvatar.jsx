import React from "react";
import classes from "./styles/CardAvatar.module.css";

export const CardAvatar = (props) => {
  return (
    <img
      className={[classes.img_avatar, props.className].join(" ")}
      width={32}
      height={32}
      src={props.src}
    />
  );
};
