import React from "react";

function Footer(){
  return (
    <div>
      <style jsx>{`
        .foot{
          text-align: center;
          background: #3A4750;
          margin-top: 5px;
          height: 120px;
        }

        p{
          padding-top 50px;
          margin-top 0;
          color: white;
          font-size: 12px;
        }
      `}</style>
      <div className="foot">
        <p>Copyright 2019</p>
      </div>

    </div>
  );
}

export default Footer;
