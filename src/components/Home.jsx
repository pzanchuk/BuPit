import React from "react";
import beer from '../assets/images/beer.jpg';
function Home(){
  return (
    <div>
      <style jsx>{`
        .irish-image > img{
          float: left;
          width: 1220px;
        }

        h3, h1{
          padding-top: 20px;
          margin-top: 5px;
        }

        .irish-text{
          color: #3A4750;
          text-align: center;
          margin-top: 500px;
          margin-left: 470px;
          position: absolute;
        }

        .main-home{
          height: 762px;
        }


      `}</style>

      <div className="main-home">
        <div className="irish-image">
          <img src = {beer}/>
        </div>
        <div className="irish-text">
          <h1>IRISH PUB</h1>
          <h3>your local and traditional Bellevue</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
