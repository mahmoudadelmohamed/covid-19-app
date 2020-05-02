import React from 'react';
import { Button as Btn } from "react-bootstrap";
import "./Buttons.scss";

const Button = ({ content, handleClick, them, size, icon, iconMarginLeft, iconMarginRight}) => {
  return (
   <Btn
     variant={them}
     onClick={() => (handleClick ? handleClick() : null)}
     size={ size }
   >
   { <span className={`m${iconMarginLeft}-2 m${iconMarginRight}-2`}> { icon }</span> }
   { content }
   </Btn>
  );
}
export default Button;
