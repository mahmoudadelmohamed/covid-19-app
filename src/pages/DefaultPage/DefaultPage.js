import React from 'react';
import "./DefaultPage.scss";
const DefaultPage = ({ background }) => {
const style = {
  minHeight: '100vh',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'
}
  return (
    <div className="container-fluid">
       <div className="row max-height d-flex justify-content-end align-items-center" style={ style }>
          <div className="col-5 ">
            <h1 className="title_uppercase banner-title">
              Hello <br /> I am patrick
            </h1>
           </div>
       </div>
    </div>

  );
}
export default DefaultPage;
