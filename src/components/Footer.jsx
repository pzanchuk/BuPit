import React from "react";

function Footer(){
  return (
    <div>
      <style jsx>{`
        .foot{
          text-align: center;
          background: #3A4750;
          margin-top: 5px;
          height: 70px;
        }

        p{
          padding-top 25px;
          margin-top 0;
          color: white;
          font-size: 12px;
        }
      `}</style>
      <div className="foot">
        <p>Copyright Bu*Pit 2019</p>
      </div>

    </div>
  );
}

export default Footer;
