import React from 'react';
import notFoundImage from '../../assets/images/not-found.gif';
import "./Empty.scss";

const Empty = ({ title }) => {
  return (
    <div className="container">
     <div className="text-center d-flex justify-content-center align-items-center flex-column not-founded">
       <h1 className="h1-2-light title_uppercase">Sorry!</h1>
       <h2 className="h2-light title_uppercase mb-3">{title}</h2>
       <img src={notFoundImage} alt="notFoundImage" className="mb-4 w-50"/>
     </div>
     </div>
  );
}
export default Empty;
